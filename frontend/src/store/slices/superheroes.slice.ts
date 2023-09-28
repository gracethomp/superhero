import { createSlice } from "@reduxjs/toolkit";
import {
  createNewSuperhero,
  fetchAllSuperheroes,
  fetchSuperheroById,
  fetchTotalCount,
} from "../services/superhero.services";
import { Superhero } from "../../types";
import { fetchImage } from "../services/media.services";

interface SuperheroState {
  totalCount: number;
  isLoading: boolean;
  page: number;
  currentSuperhero?: Superhero;
  image?: Blob | MediaSource; //temp
  superheroes: Superhero[]; //error state should be here too
}

const initialState = {
  totalCount: 0,
  superheroes: [],
  isLoading: false,
  page: 1,
} as SuperheroState;

const superheroesSlice = createSlice({
  name: "superheroes",
  initialState,
  reducers: {
    clearCurrentHero(state) {
      state.currentSuperhero = undefined;
    },
    incrementPage(state) {
      if (Math.ceil(state.totalCount / 5) >= state.page + 1) {
        state.page++;
      }
    },
    decrementPage(state) {
      if (state.page !== 1) {
        state.page--;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSuperheroes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.superheroes = action.payload;
      })
      .addCase(fetchAllSuperheroes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSuperheroById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSuperheroById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentSuperhero = action.payload;
      })
      .addCase(fetchTotalCount.fulfilled, (state, action) => {
        state.totalCount = action.payload;
      })
      .addCase(createNewSuperhero.fulfilled, (state, action) => {})
      .addCase(fetchImage.fulfilled, (state, action) => {
        state.image = action.payload;
      });
  },
});

export const { incrementPage, decrementPage, clearCurrentHero } =
  superheroesSlice.actions;

export default superheroesSlice.reducer;
