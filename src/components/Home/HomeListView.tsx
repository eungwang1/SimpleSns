import { commentIcon, eyeIcon, thumbIcon, writeIcon } from '@assets/icon';
import Button from '@components/Common/Button';
import { IPost } from '@typings/customTypes';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeContentCardView from './HomeContentCardView';

interface IHomeListViewProps {
  posts: IPost[];
}

const HomeListView = ({ posts }: IHomeListViewProps) => {
  return (
    <Layout>
      {posts.map((post, idx) => (
        <>
          <StyledLink to={`/community/post/${post.pk}`}>
            <HomeContentCardView
              post={post}
              idx={idx}
              content={`${post.content.slice(0, 40)} + 
          ${post.content.length >= 40 ? '...' : ''}`}
            />
            {post.imageUrl && (
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
        </>
      ))}
      <Link to="/community/post/new">
        <Button variant="primary" size="lg" radius="8px" position="fixed" style={{ bottom: '15px', right: '15px' }}>
          글쓰기
          <img src={writeIcon} alt="" style={{ marginLeft: '5px' }} />
        </Button>
      </Link>
    </Layout>
  );
};

export default HomeListView;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

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
