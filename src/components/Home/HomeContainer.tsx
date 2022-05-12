import React, { useEffect } from 'react';
import HomeContainerView from './HomeContainerView';
import { useAppDispatch, useAppSelector } from '@store/hook';
import { useMotionVariants } from '@lib/useMotionVariants';
import { getPosts } from '@actions/post';
import Loading from '@components/Common/Loading';

const HomeContainer = () => {
  const { getPostsLoading, posts } = useAppSelector((state) => state.postSlice);
  const { pageVariants } = useMotionVariants('top');
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(getPosts());
    })();
  }, []);
  const HomeContainerProps = {
    pageVariants,
  };
  if (getPostsLoading || !posts) return <Loading />;
  return <HomeContainerView {...HomeContainerProps} />;
};

export default React.memo(HomeContainer);
