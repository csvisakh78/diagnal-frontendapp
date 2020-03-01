import { SEARCH_DETAILS } from '../constants/action-types';
import { StoreState } from '../types';

export function rootReducer(state: StoreState, action: any): StoreState {

    if (action.type === SEARCH_DETAILS) {
        return { ...state, searchDetails: { ...state.searchDetails, ...action.payload } };
    } else {
        return state;
    }

}
