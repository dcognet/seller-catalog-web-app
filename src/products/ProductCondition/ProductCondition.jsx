import { oneOf } from "prop-types";

export default function ProductCondition({ condition }) {
  return condition === "used" ? "Neuf" : "Occasion";
}

ProductCondition.propTypes = {
  condition: oneOf(["used", "new"]),
};
