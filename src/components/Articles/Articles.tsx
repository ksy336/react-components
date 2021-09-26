import React, {
  ChangeEvent, FC, useEffect, useState,
} from 'react';
import {Link, useParams} from 'react-router-dom';
import '../Home/home.css';
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

interface ArticleProps {
    articles: Article[];
    page: number;
    onChangePage: (pageFromInput: number) => void;
}
// eslint-disable-next-line import/prefer-default-export
export const Articles: FC<ArticleProps> = ({ articles, page, onChangePage }) => {
  const [artPage, setArtPage] = useState<number | string>('');

  useEffect(() => {
    setArtPage(page);
  }, [page]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const regexp = /\d+/;
    const matchedValue = value.match(regexp);
    if (matchedValue) {
      const newValue = +matchedValue[0];
      onChangePage(newValue);
      setArtPage(newValue);
    } else {
      setArtPage('');
    }
  };

  return (
    <div>
      {articles.length ? (
        <div>
          <table style={{ border: '1px solid #555' }}>
            <tr style={{ border: '1px solid #888' }}>
              <td>Title</td>
              <td>Author</td>
              <td>Published at</td>
              <td>Image</td>
            </tr>
            {articles.map(({
              author, title, publishedAt, urlToImage,
            }, idx: number) => (
              <tr key={idx}>
                <td><Link to={`/details/${title}`}>{title}</Link></td>
                <td>{author}</td>
                <td>{publishedAt}</td>
                <td>
                  <img width={200} src={urlToImage} alt={title} />
                </td>
              </tr>
            ))}
          </table>
          <input type="text" value={artPage} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};
