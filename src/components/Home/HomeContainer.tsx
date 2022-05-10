import React, { useCallback, useEffect } from 'react';
import HomeContainerView from './HomeContainerView';
import { useAppDispatch, useAppSelector } from '@store/hook';
import { getPosts } from '@actions/post';

const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const { getPostsLoading } = useAppSelector((state) => state.postSlice);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  if (getPostsLoading) return <div>로딩중...</div>;

  return (
    <>
      <HomeContainerView />
    </>
  );
};

export default React.memo(HomeContainer);
