import { getPost, getPosts, heartPost, viewPost } from '@actions/post';
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
  getPostLoading: false,
  getPostDone: false,
  getPostError: null,
  heartPostLoading: false,
  heartPostDone: false,
  heartPostError: null,
  viewPostLoading: false,
  viewPostDone: false,
  viewPostError: null,
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
      })
      .addCase(getPost.pending, (state) => {
        state.getPostLoading = true;
      })
      .addCase(getPost.fulfilled, (state, action: PayloadAction<IPost>) => {
        state.getPostDone = true;
        state.getPostLoading = false;
        const post = { ...action.payload, writtenAt: generateBetweenTime(action.payload) };
        state.post = post;
      })
      .addCase(getPost.rejected, (state, action: ReturnType<typeof getPost.rejected>) => {
        state.getPostLoading = false;
        state.getPostError = action.error;
      })
      .addCase(heartPost.pending, (state) => {
        state.heartPostLoading = true;
      })
      .addCase(heartPost.fulfilled, (state, action: PayloadAction<IPost>) => {
        state.heartPostDone = true;
        state.heartPostLoading = false;
        if (state.post) {
          state.post.likeCount = action.payload.likeCount;
          state.post.likedState = action.payload.likedState;
        }
      })
      .addCase(heartPost.rejected, (state, action: ReturnType<typeof heartPost.rejected>) => {
        state.heartPostLoading = false;
        state.heartPostError = action.error;
      })
      .addCase(viewPost.pending, (state) => {
        state.viewPostLoading = true;
      })
      .addCase(viewPost.fulfilled, (state, action: PayloadAction<IPost>) => {
        state.viewPostDone = true;
        state.viewPostLoading = false;
        if (state.post) {
          state.post.viewCount = action.payload.viewCount;
        }
      })
      .addCase(viewPost.rejected, (state, action: ReturnType<typeof viewPost.rejected>) => {
        state.viewPostLoading = false;
        state.viewPostError = action.error;
      }),
});
export const { onCategoryFilter } = postSlice.actions;
export default postSlice.reducer;
