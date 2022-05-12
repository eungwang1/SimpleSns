import { backIcon, commentIcon_outline, thumbIcon, thumbIcon_outline } from '@assets/icon';
import Button from '@components/Common/Button';
import ContentCard from '@components/Common/ContentCard';
import { IPost } from '@typings/customTypes';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IContentDetailViewProps {
  post: IPost | null;
  likeAction: () => void;
}

const ContentDetailView = ({ post, likeAction }: IContentDetailViewProps) => {
  return (
    <>
      {post && (
        <Layout>
          <Link to="/community/list">
            <Nav>
              <img src={backIcon} alt="" />
              <span>글 목록으로</span>
            </Nav>
          </Link>
          <ContentCard post={post} idx={post.pk as number} content={post.content} />
          {post.imageUrl &&
            post.imageUrl.map((src, idx) => (
              <ImageList key={idx}>
                <img src={src} alt="" />
              </ImageList>
            ))}
          <ContentBottom>
            <Button size="sm" radius="5px" style={{ backgroundColor: '#F8F8F8', border: 'none' }} onClick={likeAction}>
              {post.likedState === 'liked' ? (
                <img src={thumbIcon} alt="" width="20px" height="20px" />
              ) : (
                <img src={thumbIcon_outline} alt="" />
              )}
              <LikeCount>{post.likeCount}</LikeCount>
            </Button>
            <Button size="sm" radius="5px" style={{ backgroundColor: '#F8F8F8', border: 'none' }}>
              <img src={commentIcon_outline} alt="" />
              <LikeCount>{post.commentCount}</LikeCount>
            </Button>
          </ContentBottom>
        </Layout>
      )}
    </>
  );
};

export default ContentDetailView;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  padding: 0 15px;
  cursor: pointer;
  span {
    color: ${(props) => props.theme.palette.Gray03};
    font-size: 0.875rem;
    font-weight: 700;
    margin-left: 11px;
    transition: color 0.2s ease-in;
    :hover {
      color: ${(props) => props.theme.palette.Gray04};
    }
  }
`;

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin-top: 17px;
  }
`;

const ContentBottom = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0 25px 0;
  padding: 0 30px;
  button {
    + button {
      margin-left: 10px;
    }
  }
`;
const LikeCount = styled.span`
  margin-left: 3px;
  color: ${(props) => props.theme.palette.Gray04};
`;
