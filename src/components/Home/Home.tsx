import './home.css';
import React, { ChangeEvent, useState, useEffect } from 'react';

// @ts-ignore
import { Articles } from '../Articles/Articles.tsx';

enum SortType {
  relevancy = 'relevancy',
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}

 interface Article {
  id: number,
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {id: string; name: string};
  title: string;
  urlToImage: string;
}

 interface GET200_Articles {
  articles: Article[];
}
const Home: React.FC = ({ news, searchArticles }: any) => {
  console.log(news, searchArticles);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [articles, setArticles] = useState<Article[]>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.popularity);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  useEffect(() => {
    searchArticles();
  }, []);

  return (
    <div className="page">
      <form className="search-group" action="" onSubmit={() => searchArticles()}>
        <label htmlFor="search">
          <input className="input" id="search" type="text" value={searchValue} onChange={handleChange} disabled={isLoading} />
          <button className="btn" type="submit" disabled={isLoading}>{isLoading ? 'Searching...' : 'Search'}</button>
        </label>
        <div style={{}} className="radios">
          <label>
            <input
              type="radio"
              value={SortType.relevancy}
              checked={sortBy === SortType.relevancy}
              onChange={() => setSortBy(SortType.relevancy)}
            />
            {' '}
            relevancy
          </label>
          <label>
            <input
              type="radio"
              value={SortType.popularity}
              checked={sortBy === SortType.popularity}
              onChange={() => setSortBy(SortType.popularity)}
            />
            {' '}
            popularity
          </label>
          <label>
            <input
              type="radio"
              value={SortType.publishedAt}
              checked={sortBy === SortType.publishedAt}
              onChange={() => setSortBy(SortType.publishedAt)}
            />
            {' '}
            publishedAt
          </label>
        </div>
        <div>
          <input type="date" />
        </div>
      </form>
      <Articles
        articles={articles}
        page={page}
        onChangePage={(pageFromInput: number) => setPage(pageFromInput)}
      />
    </div>
  );
};
export default Home;
