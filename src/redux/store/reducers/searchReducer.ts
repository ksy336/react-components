import { HomeAction, HomeActionTypes, HomeState } from '../../types/home';

const initialState: HomeState = {
  news: [],
  loading: false,
  error: null,
};

export const searchReducer = (state = initialState, action: HomeAction): HomeState => {
  switch (action.type) {
    case HomeActionTypes.FETCH_ARTICLES:
      return { loading: true, error: null, news: [] };
    case HomeActionTypes.FETCH_ARTICLES_SUCCESS:
      return { loading: false, error: null, news: action.payload };
    case HomeActionTypes.FETCH_ARTICLES_ERROR:
      return { loading: false, error: action.payload, news: [] };
    default:
      return state;
  }
};
