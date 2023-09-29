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
  isLoading: boolean; //for future spinners adding
  page: number;
  currentSuperhero?: Superhero;
  warning: string;
  superheroes: Superhero[];
}

const initialState = {
  totalCount: 0,
  warning: "",
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
    clearPage(state) {
      state.page = 1;
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
        state.warning = '';
      })
      .addCase(fetchAllSuperheroes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllSuperheroes.rejected, (state) => {
        state.isLoading = false;
        state.warning = 'Fetch superheroes error'
      })
      .addCase(fetchSuperheroById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSuperheroById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentSuperhero = action.payload;
        state.warning = ''
      }).addCase(fetchSuperheroById.rejected, (state) => {
        state.isLoading = false;
        state.warning = 'Fetch superhero error'
      })
      .addCase(fetchTotalCount.fulfilled, (state, action) => {
        state.totalCount = action.payload;
        state.warning = '';
      })
      .addCase(fetchTotalCount.rejected, (state) => {
        state.warning = 'Fetch total count error'
      })
      .addCase(createNewSuperhero.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewSuperhero.fulfilled, (state) => {
        state.isLoading = false;
        state.warning = ''
      })
      .addCase(createNewSuperhero.rejected, (state) => {
        state.isLoading = false;
        state.warning = 'Create superhero error'
      });
  },
});

export const { incrementPage, decrementPage, clearCurrentHero, clearPage } =
  superheroesSlice.actions;

export default superheroesSlice.reducer;
