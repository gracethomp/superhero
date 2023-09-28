import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Superhero } from "../../types";

export const fetchAllSuperheroes = createAsyncThunk(
  "superheroes/fetchAllSuperheroes",
  async (page: number) => {
    try {
      const response = await axios.get(`/superhero?page=${page}`);
      const superheroes = await Promise.all(
        response.data.map(async (item: Superhero) => {
          const mediaIds = await axios.get(`superhero/media/superhero/${item.id}?page=${page}`);
          const images = await Promise.all(
            mediaIds.data.map(async (mediaId: any) => {
              const imgsResponse = await axios.get(`superhero/media/${mediaId.mediaId}`, { responseType: 'blob' });

              const blob = imgsResponse.data;
              const reader = new FileReader();
              return new Promise<string>((resolve, reject) => {
                reader.onload = () => {
                  const dataUrl = reader.result as string;
                  resolve(dataUrl);
                };
                reader.onerror = reject;
                reader.readAsDataURL(blob);
              });
            })
          );
          return { ...item, images };
        })
      );
      return superheroes;
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

export const createNewSuperhero = createAsyncThunk(
  "superheroes/createNewSuperhero",
  async (superhero: Superhero) => {
    try {
      const superpowersIds = superhero.superpowers.map((power) => power.id);
      const response = await axios.post(`/superhero/`, {
        ...superhero,
        superpowers: superpowersIds,
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
