import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllSuperpowers = createAsyncThunk(
  "superpowers/fetchAllSuperpowers",
  async () => {
    try {
      const response = await axios.get(`/superpowers`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);