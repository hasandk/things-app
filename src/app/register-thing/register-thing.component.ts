import { ThingActions } from '../redux/thing-actions';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Thing } from '../entities/thing';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';

@Component({
  selector: 'app-register-thing',
  templateUrl: './register-thing.component.html',
  styleUrls: ['./register-thing.component.scss']
})
export class RegisterThingComponent implements OnInit {

  thingForm: FormGroup;
  public isLoading: boolean;

  constructor(private fb: FormBuilder, private router: Router, 
    private auth: AuthService, private thingActions: ThingActions, private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.thingForm = this.fb.group({
      'what': ['', Validators.required],
      'where': ['', Validators.required],
    });

    this.ngRedux.select(x => x.things).subscribe(state => {
      this.isLoading = state.isLoading;
    });
  }

  onThingSubmit() : void {
    if (this.thingForm.valid) {
      let thing = this.thingForm.value as Thing;
      thing.owner = this.auth.loggedInUser;

      this.thingActions.addThing(thing);
    }
  }

}
