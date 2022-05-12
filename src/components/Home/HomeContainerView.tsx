import { writeIcon } from '@assets/icon';
import Button from '@components/Common/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeCategory from './HomeCategory';
import HomeList from './HomeList';
import { motion, Variants } from 'framer-motion';
interface IHomeContainerView {
  pageVariants: Variants;
}
const HomeContainerView = ({ pageVariants }: IHomeContainerView) => {
  return (
    <>
      <Layout key="Home" variants={pageVariants} initial="initial" animate="visible" exit="leaving">
        <Title>커뮤니티</Title>
        <HomeCategory />
        <HomeList />
      </Layout>
      <Link to="/community/post/new">
        <Button variant="primary" size="lg" radius="8px" position="fixed" style={{ bottom: '15px', right: '15px' }}>
          글쓰기
          <img src={writeIcon} alt="" style={{ marginLeft: '5px' }} />
        </Button>
      </Link>
    </>
  );
};

export default HomeContainerView;

const Layout = styled(motion.div)`
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
