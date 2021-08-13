import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../services/api';
import Home from '../Home/Home';

export const Details = () => {
  const [data, setData] = useState(null);
  const { id } = useParams<{ id: string }>();
  const baseUrl = 'https://newsapi.org';
  const API_KEY = '7b5c94d160d64e8d8e352ed0706d333b';

  const selectOneArticle = (item: any) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    author: item.author,
    publishedAt: item.publishedAt,
  });
  const getArticle = async (id: any) => {
    const response = await axios.get(`${baseUrl}/details/${id}?apiKey=${API_KEY}`);
    return response.status === 200 ? selectOneArticle(response.data) : false;
  };
  useEffect(() => {
    getArticle(id).then((res) => {
      setData(res);
    });
  }, []);
  return (
      <div>
        <h3>It is an article page.</h3>
      </div>
  );
};

export default Details;
