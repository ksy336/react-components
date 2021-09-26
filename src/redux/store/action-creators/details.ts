import { Dispatch } from 'redux';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import { DetailsActionTypes, DetailsAction } from '../../types/details';

const baseUrl = 'https://newsapi.org';
const API_KEY = '7b5c94d160d64e8d8e352ed0706d333b';

const getArticle = () => async (dispatch: Dispatch<DetailsAction>) => {
  try {
    dispatch({ type: DetailsActionTypes.FETCH_DETAIL });
    const response = await axios.get(`${baseUrl}/v2/everything?qInTitle=${encodeURIComponent('title?')}&apiKey=${API_KEY}`);
    setTimeout(() => {
      // eslint-disable-next-line max-len
      dispatch({ type: DetailsActionTypes.FETCH_DETAIL_SUCCESS, payload: response.data });
    }, 500);
  } catch (e) {
    dispatch({ type: DetailsActionTypes.FETCH_DETAIL_ERROR, payload: 'The error was occurred' });
  }
};
export default getArticle;
