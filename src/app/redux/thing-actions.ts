import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';
import { Thing } from '../entities/thing';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class ThingActions{
  
        constructor(private ngRedux: NgRedux<AppState>, private apiService: ApiService, private router: Router /* Autowired */) {} 

        static SET_TYPE: string = 'SET_TYPE'; 
        static MyAction: string = 'MY_ACTION'; 
        static ADD_THING: string = 'ADD_THING'; 
        static GET_THINGS: string = 'GET_THINGS';
        static DELETE_THING: string = 'DELETE_THING'; 
        static IS_LOADING: string = 'IS_LOADING'; 
  
        getThings() {
          this.apiService.getAllThings().subscribe((result: any[]) => {
              const myThings = result.filter(x => x.localFilter === 'Thing'); // Hack to only display my data.
              
              this.ngRedux.dispatch({
                type: ThingActions.GET_THINGS,
                payload: myThings
              });
          });
        }

        addThing(thing: Thing): void {
          this.ngRedux.dispatch({
            type: ThingActions.IS_LOADING,
            payload: true
          });

          this.apiService.addThing(thing).subscribe((thingObjFromApi: Thing) => {
            this.ngRedux.dispatch({
              type: ThingActions.ADD_THING,
              payload: thingObjFromApi
            });
            this.router.navigate(['/portal/thing-list']);
          });
          console.log("thing is added successfully"); 
        }

        deleteThing(id: string): void {
          this.ngRedux.dispatch({
            type: ThingActions.DELETE_THING,
            payload: id
          });
        }

        callMyAction(isThing: boolean): void {
          this.ngRedux.dispatch({
            type: ThingActions.MyAction,
            payload: isThing
          });
        }

        setType(isThing: boolean): void {
          this.ngRedux.dispatch({
            type: ThingActions.SET_TYPE,
            payload: isThing
          });
        }
}

