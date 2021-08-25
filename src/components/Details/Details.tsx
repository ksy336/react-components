import React, {
  ChangeEvent, FC, useEffect, useState,
} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useActions } from "../../redux/hooks/useActions";

export const Details: React.FC = () => {
  const [data, setData] = useState(null);
  const { id } = useParams<{ id: null }>();
  const { title } = useParams<{ title: string }>();
  const { getArticle } = useActions();

  useEffect(() => {
    getArticle();
  }, []);
  return (
    <div>
      <h3>It is an article page about:</h3>
      <h3>{`${title}.`}</h3>
      <div />
    </div>
  );
};

export default Details;
