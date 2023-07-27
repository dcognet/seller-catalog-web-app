import { string } from "prop-types";
import { IconButton } from "@mui/material";
import { Edit, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";
import FavouritesContext from "../../contexts/";

export default function ProductActions({ id }) {
  const { favourites, toggleFavourites } = FavouritesContext.useContext();

  const isFav = favourites.includes(id);

  return (
    <>
      <IconButton component={Link} to={`/products/${id}`}>
        <Edit></Edit>
      </IconButton>
      <IconButton onClick={() => toggleFavourites({ id })}>
        {isFav ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
    </>
  );
}

ProductActions.propTypes = {
  id: string,
};
