import React from 'react';
import Dropdown from 'react-dropdown';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import Button from '@components/Common/Button';
import { ImageListType } from 'react-images-uploading';
import { backIcon, pictureIcon } from '@assets/icon';
import { Link } from 'react-router-dom';
import Uploader from './Uploader';
interface IPostViewProps {
  categoryName: string[];
  onChangeCategory: (name: string) => void;
  onChangeImages: (imageList: ImageListType, addUpdateIndex: number[] | undefined) => void;
  images: ImageListType;
  setCategoryError: () => void;
  setImages: React.Dispatch<React.SetStateAction<ImageListType>>;
  uploadRef: React.RefObject<HTMLDivElement>;
}

const contentPlaceHolder = `내용을 작성해주세요.${'\n'}
◎ 사진 및 외부 콘텐츠 첨부시 영향력 상승!
◎ 뉴스, 블로그 등 외부 콘텐츠는 https:// 링크를 붙여 넣으세요. 본문에 썸네일로 표시됩니다.
◎ 광고글 금지. 서비스 이용이 제한됩니다.`;

const PostView = ({
  uploadRef,
  categoryName,
  onChangeCategory,
  onChangeImages,
  images,
  setCategoryError,
}: IPostViewProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <Layout>
      <Nav>
        <Link to="/community/list">
          <img src={backIcon} alt="" />
        </Link>
        <h1>글쓰기</h1>
        <Button variant="primary" radius="8px" width="70px" type="submit" onClick={setCategoryError}>
          완료
        </Button>
      </Nav>
      <Box>
        <StyledDropDown options={categoryName} value={'카테고리'} onChange={({ value }) => onChangeCategory(value)} />
        {errors.category && <Error>카테고리를 선택해주세요.</Error>}
      </Box>
      <Box>
        <StyledTextArea
          {...register('title', { required: '제목을 작성해주세요', maxLength: 100 })}
          placeholder="제목을 작성해주세요"
          spellCheck="false"
          style={{ height: '28px' }}
        />
        {errors.title && errors.title.type === 'required' && <Error>{errors.title.message}</Error>}
        {errors.title && errors.title.type === 'maxLength' && <Error>100자 이하로 작성해주세요.</Error>}
      </Box>
      <Box>
        <StyledTextArea
          {...register('content', { required: '내용을 작성해주세요' })}
          placeholder={contentPlaceHolder}
          spellCheck="false"
        />
        {errors.content && errors.content.type === 'required' && <Error>{errors.content.message}</Error>}
        <Uploader onChangeImages={onChangeImages} images={images} uploadRef={uploadRef} />
        <ImageCount>
          <img src={pictureIcon} alt="" />
          <span>{`사진(${images.length}/6)`}</span>
        </ImageCount>
      </Box>
    </Layout>
  );
};

export default PostView;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Error = styled.p`
  color: red;
  font-size: 0.8rem;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 0.875rem;
  button {
    justify-content: center;
  }
`;

const StyledDropDown = styled(Dropdown)`
  width: 90px;
  font-size: 0.875rem;
  font-weight: 700;
  .Dropdown-control {
    border: none;
    padding: 8px 5px;
  }
  .Dropdown-arrow {
    top: 16px;
  }
  .Dropdown-control:hover {
    box-shadow: 0 1px 0 rgb(0 0 0 / 6%);
    box-shadow: none;
  }
`;

const Box = styled.div`
  padding: 11px 20px;
  border: 1px solid ${(props) => props.theme.palette.Gray02};
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 300px;
  resize: none;
  border: none;
  outline: none;
  :active {
    border: none;
  }
`;

const ImageCount = styled.div`
  background-color: #dbe9ff;
  color: #2c7fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.725rem;
  font-weight: 700;
  height: 2rem;
  width: 6rem;
  padding: 5px 0px;
  margin: 10px 0;
  border-radius: 5px;
  span {
    margin-left: 5px;
  }
`;
