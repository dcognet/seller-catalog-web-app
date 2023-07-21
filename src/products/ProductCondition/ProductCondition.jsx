import { oneOf, shape } from "prop-types";

export default function ProductCondition({ row }) {
  return row.condition === "used" ? "Neuf" : "Occasion";
}

ProductCondition.propTypes = {
  row: shape({
    condition: oneOf(["used", "new"]),
  }),
};
