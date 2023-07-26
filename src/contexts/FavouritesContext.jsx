import { node } from "prop-types";
import React from "react";

const initialStore = [];

// eslint-disable-next-line react-refresh/only-export-components
const FavouritesContext = React.createContext([]);

const useContext = () => React.useContext(FavouritesContext);

const Provider = ({ children }) => {
  return (
    <FavouritesContext.Provider value={initialStore}>
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
