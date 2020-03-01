import * as constants from '../constants/action-types';

export interface searchDetails {
    type: constants.SEARCH_DETAILS;
    payload: [{}];
}
export function searchDetails(items: any):  searchDetails {
    return { type: constants.SEARCH_DETAILS, payload: items };
}
