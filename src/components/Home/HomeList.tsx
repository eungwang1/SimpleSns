import useScroll from '@lib/useScroll';
import { useAppSelector } from '@store/hook';
import React, { useLayoutEffect } from 'react';
import { VACList } from 'react-vac';
import HomeListView from './HomeListView';
const HomeList = () => {
  const { posts, filteredPosts } = useAppSelector((state) => state.postSlice);
  const { scrollSave, scrollMove } = useScroll('HomeList');
  useLayoutEffect(() => {
    scrollMove();
    return () => scrollSave();
  }, []);
  const HomeCategoryProps = {
    posts: filteredPosts ?? posts,
  };
  return (
    <>
      <HomeListView {...HomeCategoryProps} />
      {/* <VACList name="dummy" data={HomeCategoryProps.posts} useList="list" /> */}
    </>
  );
};

export default HomeList;
