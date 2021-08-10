import './home.css';
import React, {ChangeEvent, useState} from 'react';


import axios from '../../services/api';
import {Article, GET200_Articles, SortType} from '../../../types';
import {AxiosResponse} from "axios";
import {Articles} from "../Articles/Articles";

const API_KEY = '7b5c94d160d64e8d8e352ed0706d333b';

export const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);
  const [page, setPage] = useState<number>(1);

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse<GET200_Articles> = await axios.get
      (`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy}&pageSize=10&page=${page}`);
      setArticles(response.data.articles)
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };
  return (
      <div>
        <form className="search-group" action="" onSubmit={handleSubmit}>
          <label htmlFor="search">
            <input className="input" id="search" type="text" value={searchValue} onChange={handleChange} disabled={isLoading} />
            <button className="btn" type="submit" disabled={isLoading}>{isLoading ? 'Searching...' : 'Search'}</button>
          </label>
          <div style={{}} className='radios'>
            <label>
              <input
                  type='radio'
                  value={SortType.relevancy}
                  checked={sortBy === SortType.relevancy}
                  onChange={() => setSortBy(SortType.relevancy)}
              />{' '}
              relevancy
            </label>
            <label>
              <input
                  type='radio'
                  value={SortType.popularity}
                  checked={sortBy === SortType.popularity}
                  onChange={() => setSortBy(SortType.popularity)}
              />{' '}
              popularity
            </label>
            <label>
              <input
                  type='radio'
                  value={SortType.publishedAt}
                  checked={sortBy === SortType.publishedAt}
                  onChange={() => setSortBy(SortType.publishedAt)}
              />{' '}
              publishedAt
            </label>
          </div>
          <div>
            <input type='date' />
          </div>
        </form>
        <Articles articles={articles} page={page} onChangePage={(pageFromInput: number) => setPage(pageFromInput)}/>
      </div>
  );
};
export default Home;
