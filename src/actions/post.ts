import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPosts = createAsyncThunk('post/getRooms', async () => {
  try {
    const res = await axios.get('http://localhost:4000/posts');
    return res.data;
  } catch (e) {
    console.log(e);
  }
});
