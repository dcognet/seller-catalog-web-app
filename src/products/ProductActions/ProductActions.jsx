import { string } from "prop-types";
import { IconButton } from "@mui/material";
import { Edit, Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import FavouritesContext from "../../contexts/";

export default function ProductActions({ id }) {
  const { addToFavourites } = FavouritesContext.useContext();

  return (
    <>
      <IconButton component={Link} to={`/products/${id}`}>
        <Edit></Edit>
      </IconButton>
      <IconButton onClick={() => addToFavourites({ id })}>
        <Favorite></Favorite>
      </IconButton>
    </>
  );
}

ProductActions.propTypes = {
  id: string,
};
