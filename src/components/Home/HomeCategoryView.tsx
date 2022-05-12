import React from 'react';
import { starEmoji } from '@assets/icon';
import Button from '@components/Common/Button';
import { Category, IPost } from '@typings/customTypes';
import styled from 'styled-components';

interface IHomeCategoryViewProps {
  list: {
    categoryPk: number;
    categoryCode: string;
    categoryName: string;
  }[];
  each: (data: Category) => {
    onFilter: () => void;
    posts: IPost[];
    currentCategory: number;
    categoryPk: number;
    categoryCode: string;
    categoryName: string;
  };
}

const HomeCategoryView = ({ list, each }: IHomeCategoryViewProps) => {
  return (
    <Layout>
      {list?.map((category) => {
        const { onFilter, currentCategory } = each(category);
        return (
          <Button
            key={category.categoryPk}
            radius="20px"
            variant={currentCategory === category.categoryPk ? 'primary' : 'default'}
            size="md"
            onClick={onFilter}
          >
            {category.categoryName === '인기글' && <StyledImg src={starEmoji} alt="" />}
            <StyledSpan>{category.categoryName}</StyledSpan>
          </Button>
        );
      })}
    </Layout>
  );
};

export default HomeCategoryView;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  overflow-x: scroll;
  padding: 20px 30px;
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const StyledImg = styled.img`
  width: 1.375rem;
  height: 1.375rem;
`;

const StyledSpan = styled.span`
  + img {
    margin-left: 4px;
  }
`;
