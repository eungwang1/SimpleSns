import { closeIcon } from '@assets/icon';
import React from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import styled from 'styled-components';
interface IUploaderProps {
  onChangeImages: (imageList: ImageListType, addUpdateIndex: number[] | undefined) => void;
  images: ImageListType;
}
const Uploader = ({ images, onChangeImages }: IUploaderProps) => {
  return (
    <ImageUploading multiple value={images} onChange={onChangeImages} maxNumber={6} dataURLKey="data_url">
      {({ imageList, onImageUpload, onImageRemove }) => (
        <Layout>
          {imageList.map((image, index) => (
            <ImageWrapper key={index}>
              <StyledImg src={image['data_url']} alt="" width="100" height="100" />
              <CloseBtn onClick={() => onImageRemove(index)}>
                <img src={closeIcon} alt="" />
              </CloseBtn>
            </ImageWrapper>
          ))}
          {imageList.length <= 5 && (
            <UploadBox onClick={onImageUpload}>
              <span>+</span>
            </UploadBox>
          )}
        </Layout>
      )}
    </ImageUploading>
  );
};

export default Uploader;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin-top: 20px;
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const StyledImg = styled.img`
  object-fit: cover;
  border-radius: 5px;
`;

const UploadBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.palette.Gray02};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  flex-shrink: 0;
  cursor: pointer;
  span {
    font-size: 3rem;
    margin-bottom: 10px;
    font-weight: 700;
    color: ${(props) => props.theme.palette.Gray04};
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  + div {
    margin-left: 10px;
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
