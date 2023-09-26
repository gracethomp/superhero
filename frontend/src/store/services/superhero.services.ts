import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchAllSuperheroes = createAsyncThunk(
  "superheroes/fetchAllSuperheroes",
  async (page: number) => {
    try {
      const response = await axios.get(`/superhero?page=${page}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchSuperheroById = createAsyncThunk(
  "superheroes/fetchSuperheroById",
  async (id: number) => {
    try {
      const response = await axios.get(`/superhero/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchTotalCount = createAsyncThunk(
  "superheroes/fetchTotalCount",
  async () => {
    try {
      const response = await axios.get(`/superhero/total-count`);
      return response.data.totalCount;
    } catch (error) {
      throw error;
    }
  }
);
