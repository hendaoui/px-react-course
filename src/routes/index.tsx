import React from "react";
import { useRoutes } from "react-router-dom";
import App from "../App";
import PokemonDetails from "../views/PokemonDetails";
import PokemonList from "../views/PokemonList";

const AppRoutes = () =>
  useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <PokemonList />,
        },
        {
          path: ":id",
          element: <PokemonDetails />,
        },
      ],
    },
  ]);

export default AppRoutes;
