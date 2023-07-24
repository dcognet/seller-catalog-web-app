import { oneOf } from "prop-types";
import withRow from "./../../hoc/withRow";

function ProductCondition({ condition }) {
  return condition === "used" ? "Neuf" : "Occasion";
}

ProductCondition.propTypes = {
  condition: oneOf(["used", "new"]),
};

const RowProductCondition = withRow(ProductCondition);
export default RowProductCondition;
