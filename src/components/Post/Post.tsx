import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { CATEGORIES, useCategory } from '@lib/useCategory';
import { VACList } from 'react-vac';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { ImageListType } from 'react-images-uploading';
import PostView from './PostView';
import { useAppDispatch, useAppSelector } from '@store/hook';
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
  const { handleSubmit, setError, clearErrors } = methods;
  const navigate = useNavigate();
  useEffect(() => {
    if (category) {
      clearErrors('category');
    }
  }, [category]);
  const setCategoryError = () => {
    if (!category) {
      setError('category', { type: 'required' }, { shouldFocus: true });
    }
  };
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
  const onChangeImages = useCallback(
    (imageList: ImageListType) => {
      setImages(imageList);
    },
    [setImages]
  );
  const PostProps = {
    categoryName,
    setCategoryError: setCategoryError,
    onChangeCategory: (name: string) => setCategory(name),
    onChangeImages,
    images,
    setImages,
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
