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
  height: 100vh;
  overflow-y: scroll;
`;

export default Home;
