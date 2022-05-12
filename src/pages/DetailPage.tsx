import ContentDetail from '@components/Detail/ContentDetail';
import useScroll from '@lib/useScroll';
import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { useMotionVariants } from '@lib/useMotionVariants';

const DetailPage = () => {
  const { scrollToTop } = useScroll('DetailPage');
  const { pageVariants } = useMotionVariants('top');
  useLayoutEffect(() => {
    scrollToTop();
  }, []);
  return (
    <motion.div key="Home" variants={pageVariants} initial="initial" animate="visible" exit="leaving">
      <ContentDetail />
    </motion.div>
  );
};

export default DetailPage;
