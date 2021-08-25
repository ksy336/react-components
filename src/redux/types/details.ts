export interface DetailsState {
    articles: any[];
    loading: boolean;
    error: null | string;
}
export enum DetailsActionTypes {
    FETCH_DETAIL = 'FETCH_DETAIL',
    FETCH_DETAIL_SUCCESS = 'FETCH_DETAIL_SUCCESS',
    FETCH_DETAIL_ERROR = 'FETCH_DETAIL_ERROR',
}
interface FetchDetailsAction {
    type: DetailsActionTypes.FETCH_DETAIL;
}
interface FetchDetailsSuccessAction {
    type: DetailsActionTypes.FETCH_DETAIL_SUCCESS;
    payload: any[]
}
interface FetchDetailsErrorAction {
    type: DetailsActionTypes.FETCH_DETAIL_ERROR;
    payload: string;
}
export type DetailsAction = FetchDetailsAction | FetchDetailsSuccessAction | FetchDetailsErrorAction
