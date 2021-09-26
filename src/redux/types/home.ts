export interface HomeState {
    news: any[];
    loading: boolean;
    error: null | string;
}
export enum HomeActionTypes {
    // eslint-disable-next-line no-unused-vars
    FETCH_ARTICLES = 'FETCH_ARTICLES',
    // eslint-disable-next-line no-unused-vars
    FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
    FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
}
interface FetchHomeAction {
    type: HomeActionTypes.FETCH_ARTICLES;
}
interface FetchHomeSuccessAction {
    type: HomeActionTypes.FETCH_ARTICLES_SUCCESS;
    payload: any[]
}
interface FetchHomeErrorAction {
    type: HomeActionTypes.FETCH_ARTICLES_ERROR;
    payload: string;
}
export type HomeAction = FetchHomeAction | FetchHomeSuccessAction | FetchHomeErrorAction
