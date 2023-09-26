import { createSlice } from "@reduxjs/toolkit";
import { fetchAllSuperheroes } from "../services/superhero.services";

export type Superhero = {
  nickname: string;
};

interface SuperheroState {
  isLoading: boolean;
  superheroes: Superhero[];
}

const initialState = { superheroes: [], isLoading: false } as SuperheroState;

const superheroesSlice = createSlice({
  name: "superheroes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSuperheroes.fulfilled, (state, action) => {})
      .addCase(fetchAllSuperheroes.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default superheroesSlice.reducer;
