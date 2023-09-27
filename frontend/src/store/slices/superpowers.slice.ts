import { createSlice } from "@reduxjs/toolkit";
import { Superpower } from "../../types";
import { fetchAllSuperpowers } from "../services/superpowers.services";

interface SuperpowerState {
  superpowers: Superpower[];
}

const initialState = {
  superpowers: [],
} as SuperpowerState;

const superheroesSlice = createSlice({
  name: "superheroes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllSuperpowers.fulfilled, (state, action) => {
        state.superpowers = action.payload;
    });
  },
});


export default superheroesSlice.reducer;
