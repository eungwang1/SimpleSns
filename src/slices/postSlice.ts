import { getPosts } from '@actions/post';
import { generateBetweenTime } from '@lib/generateBetweenTime';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost, IPostState } from '@typings/customTypes';

export const initialState: IPostState = {
  posts: [],
  filteredPosts: null,
  filteredCategoryPk: 0,
  post: null,
  getPostsLoading: false,
  getPostsDone: false,
  getPostsError: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    onCategoryFilter: (state, action) => {
      if (state.posts) {
        // action.payload === 7 : 인기글
        if (action.payload === 7) {
          state.filteredPosts = state.posts.filter((el) => el.viewCount >= 100);
          state.filteredCategoryPk = action.payload;
          return;
        }
        // // action.payload === 6 : 전체글
        if (action.payload === 6) {
          state.filteredPosts = null;
          state.filteredCategoryPk = action.payload;
          return;
        }
        state.filteredPosts = state.posts.filter((el) => el.categoryPk === action.payload);
        state.filteredCategoryPk = action.payload;
      }
    },
    onCategoryReset: (state) => {
      state.filteredPosts = null;
      state.filteredCategoryPk = 0;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getPosts.pending, (state) => {
        state.getPostsLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
        state.getPostsDone = true;
        state.getPostsLoading = false;
        const posts = action.payload.map((post) => {
          const writtenAt = generateBetweenTime(post);
          return { ...post, writtenAt };
        });
        state.posts = posts;
      })
      .addCase(getPosts.rejected, (state, action: ReturnType<typeof getPosts.rejected>) => {
        state.getPostsLoading = false;
        state.getPostsError = action.error;
      }),
});
export const { onCategoryFilter, onCategoryReset } = postSlice.actions;
export default postSlice.reducer;
