import { ThingActions} from './redux/thing-actions'
import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'thing';
  

  constructor( private thingActions: ThingActions){}

  ngOnInit(): void {
    this.thingActions.getThings();
  }
  
}
