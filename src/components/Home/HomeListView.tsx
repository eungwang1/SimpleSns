import React from 'react';
import { commentIcon, eyeIcon, thumbIcon } from '@assets/icon';
import { IPost } from '@typings/customTypes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContentCard from '../Common/ContentCard';
interface IHomeListViewProps {
  posts: IPost[];
}

const HomeListView = ({ posts }: IHomeListViewProps) => {
  return (
    <Layout>
      {posts.map((post, idx) => (
        <StyledLink key={post.pk} to={`/community/post/${post.pk}`}>
          <ContentCard post={post} idx={idx} content={post.content} compress="true" />
          {post.imageUrl && post.imageUrl.length >= 1 && (
            <ImageList>
              <ContentImg src={post.imageUrl[0]} alt="" height="160px" width="85%" />
            </ImageList>
          )}
          <ContentBottom>
            <div className="flex-row">
              <img src={eyeIcon} alt="" width="16px" height="16px" />
              <span>{post.viewCount}</span>
            </div>
            <div className="flex-row">
              <img src={thumbIcon} alt="" width="16px" height="16px" />
              <span>{post.likeCount}</span>
            </div>
            <div className="flex-row">
              <img src={commentIcon} alt="" width="16px" height="16px" />
              <span>{post.commentCount}</span>
            </div>
          </ContentBottom>
        </StyledLink>
      ))}
    </Layout>
  );
};

export default HomeListView;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ImageList = styled.div`
  margin-top: 20px;
  text-align: center;
`;
const ContentImg = styled.img`
  object-fit: cover;
  max-width: 1000px;
`;

const ContentBottom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  .flex-row {
    :first-child {
      margin-left: 30px;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    + div {
      margin-left: 20px;
    }
    span {
      margin-left: 5px;
      color: ${(props) => props.theme.palette.Gray04};
      font-size: 0.75rem;
    }
  }
  padding-bottom: 20px;
  border-bottom: 6px solid ${(props) => props.theme.palette.Gray02};
`;

const StyledLink = styled(Link)`
  transition: all 0.2s ease-out;
  :hover {
    background-color: ${(props) => props.theme.palette.Gray01};
  }
`;
