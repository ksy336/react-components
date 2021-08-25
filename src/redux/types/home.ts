export interface HomeState {
    articles: any[];
    loading: boolean;
    error: null | string;
}
export enum HomeActionTypes {
    FETCH_ARTICLES = 'FETCH_ARTICLES',
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
