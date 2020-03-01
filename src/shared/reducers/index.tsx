import { SEARCH_DETAILS } from '../constants/action-types';
import { StoreState } from '../types';

export function rootReducer(state: StoreState, action: any): StoreState {

    if (action.type === SEARCH_DETAILS) {
        const result = action.payload.content.filter((data:any) => data.name.toLowerCase().includes(action.payload.keyword.toLowerCase()));
        return { ...state, searchDetails: result  };
    } else {
        return state;
    }

}
