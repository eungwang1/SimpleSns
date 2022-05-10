import { useAppSelector } from '@store/hook';
import { IPost } from '@typings/customTypes';
import React from 'react';
import { VACList } from 'react-vac';
import HomeListView from './HomeListView';

const HomeList = () => {
  const { posts, filteredPosts } = useAppSelector((state) => state.postSlice);
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
