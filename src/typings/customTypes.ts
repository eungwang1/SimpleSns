import { SerializedError } from '@reduxjs/toolkit';

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
  writtenAt: string | Date;
  writerNickName: string;
  writerProfileUrl: string;
}

export interface IPostState {
  posts: IPost[];
  filteredPosts: IPost[] | null;
  filteredCategoryPk: number;
  post: IPost | null;
  getPostsLoading: boolean;
  getPostsDone: boolean;
  getPostsError: SerializedError | null;
}

export type Category = {
  categoryPk: number;
  categoryCode: string;
  categoryName: string;
};
