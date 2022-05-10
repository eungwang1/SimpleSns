import React from 'react';
import styled from 'styled-components';
import HomeCategory from './HomeCategory';
import HomeList from './HomeList';
const HomeContainerView = () => {
  return (
    <Layout>
      <Title>커뮤니티</Title>
      <HomeCategory />
      <HomeList />
    </Layout>
  );
};

export default HomeContainerView;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 34px 0px;
  width: 100%;
`;
const Title = styled.div`
  font-size: 1.375rem;
  font-weight: bold;
  padding: 0 30px;
`;
