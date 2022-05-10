import { getPosts } from '@actions/post';
import { createSlice } from '@reduxjs/toolkit';
import { IPostState } from '@typings/customTypes';

export const initialState: IPostState = {
  posts: [],
  post: null,
  getPostsLoading: false,
  getPostsDone: false,
  getPostsError: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getPosts.pending, (state) => {
        state.getPostsLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.getPostsDone = true;
        state.getPostsLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action: ReturnType<typeof getPosts.rejected>) => {
        state.getPostsLoading = false;
        state.getPostsError = action.error;
      }),
});
export default postSlice.reducer;
