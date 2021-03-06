import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useCategory } from '@lib/useCategory';
import { VACList } from 'react-vac';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { ImageListType } from 'react-images-uploading';
import PostView from './PostView';
import { useAppDispatch } from '@store/hook';
import { v4 as uuidv4 } from 'uuid';
import { postSchema } from '@lib/postSchema';
import { getPosts, post } from '@actions/post';
import { useNavigate } from 'react-router-dom';
import useScroll from '@lib/useScroll';
type FormData = {
  title: string;
  content: string;
  category?: string;
};

const Post = () => {
  const [category, setCategory] = useState('');
  const { scrollRemove } = useScroll('HomeList');
  const [images, setImages] = useState<ImageListType>([]);
  const { categoryName, convert } = useCategory();
  const dispatch = useAppDispatch();
  const methods = useForm<FormData>();
  const navigate = useNavigate();
  const { handleSubmit, setError, clearErrors } = methods;
  const uploadRef = useRef<HTMLDivElement>(null);

  // Category Validation
  const setCategoryError = () => {
    if (!category) {
      setError('category', { type: 'required' }, { shouldFocus: true });
    }
  };
  useEffect(() => {
    if (category) {
      clearErrors('category');
    }
  }, [category]);

  // 이미지 업로드시, 업로드 버튼이 보이도록 스크롤 이동
  useEffect(() => {
    if (uploadRef.current) {
      uploadRef.current.scrollIntoView({ inline: 'end' });
    }
  }, [images]);

  const onChangeImages = useCallback(
    (imageList: ImageListType) => {
      setImages(imageList);
    },
    [setImages]
  );

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const categoryObj = convert(category);
    const imageUrl = images.map((data) => data.data_url);
    const submitData = postSchema({
      ...data,
      imageUrl,
      pk: uuidv4(),
      category: categoryObj,
    });
    await dispatch(post(submitData));
    await dispatch(getPosts());
    scrollRemove();
    navigate('/community/list');
  };

  const PostProps = {
    categoryName,
    setCategoryError: setCategoryError,
    onChangeCategory: (name: string) => setCategory(name),
    onChangeImages,
    images,
    setImages,
    uploadRef,
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PostView {...PostProps} />
        {/* <VACList name="dummy" data={PostProps} useList="list" /> */}
      </form>
    </FormProvider>
  );
};

export default Post;
