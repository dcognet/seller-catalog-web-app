import { node } from "prop-types";
import React, { useReducer } from "react";

const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

const initialStore = [];

// eslint-disable-next-line react-refresh/only-export-components
const FavouritesContext = React.createContext([]);

const useContext = () => React.useContext(FavouritesContext);

const favReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return state.filter((i) => i === action.id).length === 0
        ? [...state, action.id]
        : state;
    case REMOVE_FROM_FAVOURITES:
      return state.filter(({ id }) => id === action.id);
  }
  return state;
};

const Provider = ({ children }) => {
  const [favourites, dispatch] = useReducer(favReducer, initialStore);

  const addToFavourites = ({ id }) => dispatch({ type: ADD_TO_FAVOURITES, id });
  const removeFromFavourites = ({ id }) =>
    dispatch({ type: REMOVE_FROM_FAVOURITES, id });

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

Provider.propTypes = {
  children: node,
};

const CustomFavouritesContext = {
  Provider,
  useContext,
};

export default CustomFavouritesContext;
