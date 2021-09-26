import React, {
  ChangeEvent, FC, useEffect, useState,
} from 'react';
import { Link, useParams } from 'react-router-dom';


const Details: React.FC = () => {
  const [data, setData] = useState(null);
  const { id } = useParams<{ id: null }>();
  const { title } = useParams<{ title: string }>();
  return (
    <div>
      <h3>It is an article page about:</h3>
      <h3>{`${title}.`}</h3>
      <div />
    </div>
  );
};

export default Details;
