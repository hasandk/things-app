import { ThingActions } from './thing-actions';
import { tassign } from 'tassign';
import { ThingState } from './store';
import { Thing } from '../entities/thing';


const INITIAL_STATE: ThingState = {things: [], isLoading: false };

export function thingsReducer(state: ThingState = INITIAL_STATE, action: any) {
    switch (action.type) {
        case ThingActions.GET_THINGS:
            return tassign(state, { things: action.payload });
        case ThingActions.IS_LOADING:
            return tassign(state, {isLoading: action.payload});
        case ThingActions.ADD_THING:
            const newThings = [...state.things, action.payload]; // Javascript spread operator
            return tassign(state, { things: newThings, isLoading: false }); 
        case ThingActions.DELETE_THING:
            const afterDeleteThings: Thing[] = state.things.filter(thing => thing._id !== action.payload);
            return tassign(state, { things: afterDeleteThings });
        default:
            return state;
    }
}
