import { IPost } from '@typings/customTypes';
import React from 'react';
import styled, { css } from 'styled-components';
type compress = 'true' | 'false';
interface IContentCardProps {
  post: IPost;
  idx: number;
  content: string;
  compress?: compress;
}
const ContentCard = ({ post, idx, content, compress = 'false' }: IContentCardProps) => {
  return (
    <>
      <ContentHeader key={post.pk}>
        <ProfileImg idx={idx % 3} src={post.writerProfileUrl} alt="" width="32px" height="32px" />
        <div className="flex-col">
          <Nickname>{post.writerNickName}</Nickname>
          <CategoryAndDate>{`${post.categoryName}・${post.writtenAt}`}</CategoryAndDate>
        </div>
      </ContentHeader>
      <ContentBody>
        <Title compress={compress}>{post.title}</Title>
        <Content compress={compress}>{content}</Content>
      </ContentBody>
    </>
  );
};

export default ContentCard;

const ContentHeader = styled.div`
  padding: 0 30px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  .flex-col {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
  }
  align-items: center;
`;

const Nickname = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  margin-top: 5px;
`;

const CategoryAndDate = styled.div`
  color: ${(props) => props.theme.palette.Gray03};
  font-size: 0.75rem;
`;

const ProfileImg = styled.img<{ idx: number }>`
  padding: 4px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.palette.backColorList[props.idx]};
`;

const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1<{ compress: compress }>`
  padding: 0 30px;
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 700;
  word-break: break-all;
  ${(props) =>
    props.compress === 'true' &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      line-height: 1.8;
      overflow: hidden;
    `}
`;

const Content = styled.p<{ compress: compress }>`
  padding: 0 30px;
  margin-top: 8px;
  font-size: 0.875rem;
  word-break: break-all;
  color: ${(props) => props.theme.palette.Gray04};
  ${(props) =>
    props.compress === 'true' &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.8;
      overflow: hidden;
    `}
`;
