import { string } from "prop-types";
import { IconButton } from "@mui/material";
import { Edit, Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function ProductActions({ id }) {
  return (
    <>
      <IconButton component={Link} to={`/products/${id}`}>
        <Edit></Edit>
      </IconButton>
      <IconButton>
        <Favorite></Favorite>
      </IconButton>
    </>
  );
}

ProductActions.propTypes = {
  id: string,
};
