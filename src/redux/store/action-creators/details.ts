import { Dispatch } from 'redux';
import axios from 'axios';
import { DetailsActionTypes, DetailsAction } from '../../types/details';

const selectOneArticle = (item: any) => ({
  id: item.id,
  title: item.title,
  image: item.image,
  author: item.author,
  publishedAt: item.publishedAt,
});
const baseUrl = 'https://newsapi.org';
const API_KEY = '7b5c94d160d64e8d8e352ed0706d333b';

export const getArticle = () => async (dispatch: Dispatch<DetailsAction>) => {
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
