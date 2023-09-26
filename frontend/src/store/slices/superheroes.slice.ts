import { createSlice } from "@reduxjs/toolkit";
import {
  createNewSuperhero,
  fetchAllSuperheroes,
  fetchSuperheroById,
  fetchTotalCount,
} from "../services/superhero.services";
import { Superhero } from "../../types";

interface SuperheroState {
  totalCount: number;
  isLoading: boolean;
  page: number;
  currentSuperhero?: Superhero;
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
      .addCase(createNewSuperhero.fulfilled, (state, action) => {});
  },
});

export const { incrementPage, decrementPage } = superheroesSlice.actions;

export default superheroesSlice.reducer;
