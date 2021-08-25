import { DetailsAction, DetailsActionTypes, DetailsState } from '../../types/details';

const initialState: DetailsState = {
  articles: [],
  loading: false,
  error: null,
};

export const detailsReducer = (state = initialState, action: DetailsAction): DetailsState => {
  switch (action.type) {
    case DetailsActionTypes.FETCH_DETAIL:
      return { loading: true, error: null, articles: [] };
    case DetailsActionTypes.FETCH_DETAIL_SUCCESS:
      return { loading: false, error: null, articles: action.payload };
    case DetailsActionTypes.FETCH_DETAIL_ERROR:
      return { loading: false, error: action.payload, articles: [] };
    default:
      return state;
  }
};
