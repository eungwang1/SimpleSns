import React, { useLayoutEffect } from 'react';
import Post from '@components/Post/Post';
import { motion } from 'framer-motion';
import { useMotionVariants } from '@lib/useMotionVariants';
import useScroll from '@lib/useScroll';

const PostPage = () => {
  const { pageVariants } = useMotionVariants('left');
  const { scrollToTop } = useScroll('DetailPage');
  useLayoutEffect(() => {
    scrollToTop();
  }, []);
  return (
    <motion.div key="Home" variants={pageVariants} initial="initial" animate="visible" exit="leaving">
      <Post />
    </motion.div>
  );
};

export default PostPage;
