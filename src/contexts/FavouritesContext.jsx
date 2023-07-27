import { node } from "prop-types";
import React, { useReducer } from "react";

const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";

const initialStore = [];

// eslint-disable-next-line react-refresh/only-export-components
const FavouritesContext = React.createContext([]);

const useContext = () => React.useContext(FavouritesContext);

const favReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      if (state.includes(action.id)) {
        return state.filter((id) => id !== action.id);
      }
      return [...state, action.id];
  }
  return state;
};

const Provider = ({ children }) => {
  const [favourites, dispatch] = useReducer(favReducer, initialStore);
  const toggleFavourites = ({ id }) => dispatch({ type: TOGGLE_FAVOURITE, id });

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        toggleFavourites,
      }}
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
