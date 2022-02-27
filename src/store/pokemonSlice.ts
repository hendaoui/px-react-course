import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";

export interface PokemonState {
  selectedPokemon: any;
}

const initialState: PokemonState = {
  selectedPokemon: {},
};

export const pokemonSlice: Slice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonData: (state: RootStateOrAny, action: PayloadAction) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const selectedPokemonSelector = (state: RootStateOrAny) =>
  state.pokemon.selectedPokemon;

// Action creators are generated for each case reducer function
export const { setPokemonData } = pokemonSlice.actions;

export default pokemonSlice.reducer;
