import React from 'react';
import HomeCategoryView from './HomeCategoryView';
import { VACList } from 'react-vac';
import { useAppDispatch, useAppSelector } from '@store/hook';
import { onCategoryFilter, onCategoryReset } from '@slices/postSlice';
import { Category } from '@typings/customTypes';
const HomeCategory = () => {
  const { posts, filteredPosts, filteredCategoryPk } = useAppSelector((state) => state.postSlice);
  const dispatch = useAppDispatch();
  const CATEGORIES = [
    {
      categoryPk: 6,
      categoryCode: 'ALL',
      categoryName: '전체',
    },
    {
      categoryPk: 7,
      categoryCode: 'RANKING',
      categoryName: '인기글',
    },
    {
      categoryPk: 1,
      categoryCode: 'PETITION',
      categoryName: '대선청원',
    },
    {
      categoryPk: 2,
      categoryCode: 'FREE',
      categoryName: '자유글',
    },
    {
      categoryPk: 3,
      categoryCode: 'QNA',
      categoryName: '질문/답변',
    },
    {
      categoryPk: 4,
      categoryCode: 'NEWS',
      categoryName: '뉴스',
    },
    {
      categoryPk: 5,
      categoryCode: 'TIP',
      categoryName: '노하우',
    },
  ];
  const HomeCategoryProps = {
    list: CATEGORIES,
    each: (data: Category) => ({
      ...data,
      onFilter: () => {
        dispatch(onCategoryFilter(data.categoryPk));
      },
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
