import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchAllSuperheroes = createAsyncThunk(
  "superheroes/fetchAllSuperheroes",
  async () => {
    try {
      const response = await axios.get(`/superhero`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
