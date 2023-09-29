import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Superhero } from "../../types";

export const fetchAllSuperheroes = createAsyncThunk(
  "superheroes/fetchAllSuperheroes",
  async (page: number) => {
    try {
      const response = await axios.get(`/superhero?page=${page}`);
      return response.data.map((value: { images: any[]; }) => {
        return { ...value, images: value.images.map((item) => item.mediaId) };
      });
    } catch (error) {
      throw error;
    }
  }
);

export const fetchSuperheroById = createAsyncThunk(
  "superheroes/fetchSuperheroById",
  async (id: number) => {
    try {
      const value = (await axios.get(`/superhero/${id}`)).data;
      return { ...value, images: value.images.map((item: { mediaId: any; }) => item.mediaId) };
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

export const createNewSuperhero = createAsyncThunk(
  "superheroes/createNewSuperhero",
  async (
    payload: { superhero: Superhero; files: (File | string)[] },
    thunkAPI
  ) => {
    try {
      const formData = new FormData();
      formData.append("nickname", payload.superhero.nickname);
      formData.append("real_name", payload.superhero.real_name);
      formData.append(
        "origin_description",
        payload.superhero.origin_description
      );
      formData.append("catch_phrase", payload.superhero.catch_phrase);
      payload.files.forEach((file, index) => {
        formData.append(`files`, file);
      });
      payload.superhero.superpowers.forEach((power, index) => {
        formData.append(`superpowers`, power.id ? power.id.toString() : "");
      });
      const response = await axios.post(`/superhero/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateSuperhero = createAsyncThunk(
  "superheroes/updateSuperhero",
  async (superhero: Superhero) => {
    try {
      const superpowersIds = superhero.superpowers.map((power) => power.id);
      const response = await axios.patch(`/superhero/${superhero.id}`, {
        ...superhero,
        superpowers: superpowersIds,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteSuperhero = createAsyncThunk(
  "superheroes/deleteSuperhero",
  async (id: number) => {
    try {
      const response = await axios.delete(`/superhero/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
