import { string } from "prop-types";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import LargeField from "./../../ds/atoms/LargeField/";

export default function ProductDescription({ id, name, description }) {
  return (
    <LargeField>
      <Typography component={Link} to={`products/${id}`}>
        {name}
      </Typography>
      <br></br>
      <Typography noWrap>{description}</Typography>
    </LargeField>
  );
}

ProductDescription.propTypes = {
  name: string,
  description: string,
  id: string,
};
