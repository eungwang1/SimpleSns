import { IPost } from '@typings/customTypes';

interface IPostSchema extends Pick<IPost, 'pk' | 'title' | 'content' | 'imageUrl'> {
  category: Pick<IPost, 'categoryName' | 'categoryPk'>;
}

export const postSchema = ({ pk, category, title, content, imageUrl }: IPostSchema) => {
  const now = new Date();
  now.setHours(now.getHours() + 9);
  return {
    id: pk,
    categoryPk: category.categoryPk,
    categoryName: category.categoryName,
    pk,
    title,
    content,
    viewCount: 0,
    likeCount: 0,
    likedState: 'unliked',
    commentCount: 0,
    imageUrl,
    writtenAt: now,
    writerNickName: '은광',
    writerProfileUrl: 'https://static.zaritalk.com/profiles/profile-57-img-fox-39-39%403x.png',
    count: 0,
  };
};
