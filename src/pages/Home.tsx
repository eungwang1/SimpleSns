import HomeContainer from '@components/Home/HomeContainer';
import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Layout>
      <HomeContainer />
    </Layout>
  );
};

const Layout = styled.div`
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export default Home;
