import React, { useCallback } from 'react';
import HomeCategoryView from './HomeCategoryView';
import { VACList } from 'react-vac';
import { useAppDispatch, useAppSelector } from '@store/hook';
import { onCategoryFilter } from '@slices/postSlice';
import { Category } from '@typings/customTypes';
import { CATEGORIES } from '@lib/useCategory';
const HomeCategory = () => {
  const { posts, filteredPosts, filteredCategoryPk } = useAppSelector((state) => state.postSlice);
  const dispatch = useAppDispatch();

  const HomeCategoryProps = {
    list: CATEGORIES,
    each: (data: Category) => ({
      ...data,
      // 카테고리 클릭시 필터
      onFilter: useCallback(() => {
        dispatch(onCategoryFilter(data.categoryPk));
      }, []),
      posts: filteredPosts ? filteredPosts : posts,
      currentCategory: filteredCategoryPk,
    }),
  };
  return (
    <>
      <HomeCategoryView {...HomeCategoryProps} />
      {/* <VACList name="dummy" data={HomeCategoryProps} useList="list" /> */}
    </>
  );
};

export default HomeCategory;
