import React from 'react';
import { useParams } from 'react-router-dom';
const Detail = () => {
  const params = useParams();
  const { post_pk } = params;
  return <div>{post_pk}</div>;
};

export default Detail;
