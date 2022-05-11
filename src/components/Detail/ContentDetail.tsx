import React, { useEffect } from 'react';
import { getPost, heartPost, viewPost } from '@actions/post';
import { useAppDispatch, useAppSelector } from '@store/hook';
import { likedState } from '@typings/customTypes';
import { useParams } from 'react-router-dom';
import { VACList } from 'react-vac';
import ContentDetailView from './ContentDetailView';

const ContentDetail = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { post, getPostLoading } = useAppSelector((state) => state.postSlice);
  const likedState: likedState = post ? post.likedState : 'unliked';
  let post_pk: string;

  if (typeof params.post_pk === 'string') {
    post_pk = params.post_pk;
  }
  useEffect(() => {
    (async () => {
      await dispatch(getPost(post_pk));
      await dispatch(viewPost(post_pk));
    })();
  }, []);
  const ContentDetailProps = {
    post,
    likeAction: () => {
      dispatch(heartPost({ post_pk, likedState }));
    },
  };
  if (getPostLoading && !post) return <div>로딩중...</div>;
  return (
    <>
      <ContentDetailView {...ContentDetailProps} />
      {/* <VACList name="dummy" data={ContentDetailProps} useList="list" /> */}
    </>
  );
};

export default ContentDetail;
