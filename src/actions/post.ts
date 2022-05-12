import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPost, IPostState, likedState } from '@typings/customTypes';
import axios from 'axios';
type dataForheart = {
  post_pk: string;
  likedState: likedState;
};

export const getPosts = createAsyncThunk('post/getPosts', async () => {
  try {
    const res = await axios.get('http://localhost:4000/posts');
    return res.data;
  } catch (e) {
    console.log(e);
  }
});

export const getPost = createAsyncThunk('post/getPost', async (pk: string) => {
  try {
    const res = await axios.get('http://localhost:4000/posts', {
      params: {
        pk,
      },
    });
    return res.data[0];
  } catch (e) {
    console.log(e);
  }
});

export const post = createAsyncThunk('post/post', async (data: any) => {
  try {
    const res = await axios.post('http://localhost:4000/posts', data);
    return res.data[0];
  } catch (e) {
    console.log(e);
  }
});

export const heartPost = createAsyncThunk('post/heartPost', async (data: dataForheart, thunkAPI) => {
  const { postSlice } = thunkAPI.getState() as { postSlice: IPostState };
  const currentLikeCount = postSlice.post ? postSlice.post?.likeCount : 0;
  let likeCount = 0;
  let likedState: likedState = 'unliked';
  if (data.likedState === 'unliked') {
    likeCount = currentLikeCount + 1;
    likedState = 'liked';
  } else if (data.likedState === 'liked') {
    likeCount = currentLikeCount - 1;
    likedState = 'unliked';
  }
  try {
    const res = await axios.patch(`http://localhost:4000/posts/${data.post_pk}`, {
      likeCount,
      likedState,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
});

export const viewPost = createAsyncThunk('post/viewPost', async (post_pk: string, thunkAPI) => {
  const { postSlice } = thunkAPI.getState() as { postSlice: IPostState };
  const currentViewCount = postSlice.post ? postSlice.post?.viewCount : 0;
  try {
    const res = await axios.patch(`http://localhost:4000/posts/${post_pk}`, {
      viewCount: currentViewCount + 1,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
});
