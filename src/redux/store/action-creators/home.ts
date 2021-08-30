import { Dispatch } from 'redux';
import axios from 'axios';
import { useState } from 'react';
// @ts-ignore
import { HomeAction, HomeActionTypes } from '../../types/home.ts';

 enum SortType {
  popularity = 'popularity',
}
const API_KEY = '7b5c94d160d64e8d8e352ed0706d333b';

const searchArticles = () => {
  const [searchValue] = useState<string>('');
  const [sortBy] = useState<SortType>(SortType.popularity);
  const [page] = useState<number>(1);

  return async (dispatch: Dispatch<HomeAction>) => {
    try {
      dispatch({ type: HomeActionTypes.FETCH_ARTICLES });
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy}&pageSize=10&page=${page}`);
      setTimeout(() => {
        dispatch({ type: HomeActionTypes.FETCH_ARTICLES_SUCCESS, payload: response.data });
      }, 500);
    } catch (e) {
      dispatch({ type: HomeActionTypes.FETCH_ARTICLES_ERROR, payload: 'The error was occurred' });
    }
  };
};
export default searchArticles;
