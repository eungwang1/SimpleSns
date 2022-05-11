import { IPost } from '@typings/customTypes';
import React from 'react';
import styled from 'styled-components';
interface IHomeContentCardViewProps {
  post: IPost;
  idx: number;
  content: string;
}
const HomeContentCardView = ({ post, idx, content }: IHomeContentCardViewProps) => {
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
        <Title>{post.title}</Title>
        <Content>
          {content}
          {`${post.content.slice(0, 40)} + 
          ${post.content.length >= 40 ? '...' : ''}`}
        </Content>
      </ContentBody>
    </>
  );
};

export default HomeContentCardView;

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
`;

const CategoryAndDate = styled.div`
  color: ${(props) => props.theme.palette.Gray03};
  font-size: 0.75rem;
  margin-top: 3px;
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

const Title = styled.h1`
  padding: 0 30px;
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 700;
`;

const Content = styled.p`
  padding: 0 30px;
  margin-top: 8px;
  font-size: 0.875rem;
  color: ${(props) => props.theme.palette.Gray04};
`;
