import React, { useCallback, useEffect } from 'react';
import { getPost, heartPost, viewPost } from '@actions/post';
import { useAppDispatch, useAppSelector } from '@store/hook';
import { likedState } from '@typings/customTypes';
import { useParams } from 'react-router-dom';
import { VACList } from 'react-vac';
import ContentDetailView from './ContentDetailView';
import Loading from '@components/Common/Loading';

const ContentDetail = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { post, getPostDone } = useAppSelector((state) => state.postSlice);
  const likedState: likedState = post ? post.likedState : 'unliked';
  let post_pk: string;

  if (typeof params.post_pk === 'string') {
    post_pk = params.post_pk;
  }
  // 마운트시 post정보 받아오기, viewCount+=1
  useEffect(() => {
    (async () => {
      await dispatch(getPost(post_pk));
      await dispatch(viewPost(post_pk));
    })();
  }, []);

  // 좋아요 클릭 액션
  const likeAction = useCallback(() => {
    dispatch(heartPost({ post_pk, likedState }));
  }, []);

  const ContentDetailProps = {
    post,
    likeAction,
  };

  if (!getPostDone && !post) return <Loading />;
  return (
    <>
      <ContentDetailView {...ContentDetailProps} />
      {/* <VACList name="dummy" data={ContentDetailProps} useList="list" /> */}
    </>
  );
};

export default ContentDetail;
