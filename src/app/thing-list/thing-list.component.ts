import { Component, OnInit } from '@angular/core';
import { ThingActions } from '../redux/thing-actions';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { Thing } from '../entities/thing';

@Component({
  selector: 'app-thing-list',
  templateUrl: './thing-list.component.html',
  styleUrls: ['./thing-list.component.scss']
})
export class ThingListComponent implements OnInit {
  
  private things: Thing[];

  constructor(private thingActions: ThingActions,
    private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.ngRedux.select(x => x.things).subscribe((state) => {
      this.things = state.things;
    });
  }

  onDeleteThing(id: string): void {
    this.thingActions.deleteThing(id);
  }
  

}
