import { SerializedError } from '@reduxjs/toolkit';

export type likedState = 'unliked' | 'liked';
export interface IPost {
  categoryPk: number;
  categoryName: string;
  pk: number | string;
  title: string;
  content: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  imageUrl: string[];
  writtenAt: Date | string;
  writerNickName: string;
  writerProfileUrl: string;
  likedState: likedState;
}

export interface IPostState {
  posts: IPost[];
  filteredPosts: IPost[] | null;
  filteredCategoryPk: number;
  post: IPost | null;
  getPostsLoading: boolean;
  getPostsDone: boolean;
  getPostsError: SerializedError | null;
  getPostLoading: boolean;
  getPostDone: boolean;
  getPostError: SerializedError | null;
  postLoading: boolean;
  postDone: boolean;
  postError: SerializedError | null;
  heartPostLoading: boolean;
  heartPostDone: boolean;
  heartPostError: SerializedError | null;
  viewPostLoading: boolean;
  viewPostDone: boolean;
  viewPostError: SerializedError | null;
}

export type Category = {
  categoryPk: number;
  categoryCode: string;
  categoryName: string;
};
