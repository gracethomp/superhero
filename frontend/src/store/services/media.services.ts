import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchImage = createAsyncThunk(
    "superhero/fetchImage",
    async (id: number) => {
      try {
        const response1 = await axios.get(`/media/superhero/${id}`);
        const response2 = await axios.get(`/media/${response1.data[0].mediaId}`, { responseType: 'blob' });
        return response2.data;
      } catch (error) {
        throw error;
      }
    }
  );