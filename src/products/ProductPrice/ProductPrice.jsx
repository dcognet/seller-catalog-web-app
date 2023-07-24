import { number } from "prop-types";
import { withRow } from "./../../hoc";
import { Price } from "../../ds/atoms";

function ProductPrice({ price }) {
  return <Price value={price} />;
}

ProductPrice.propTypes = {
  price: number,
};

const RowProductPrice = withRow(ProductPrice);
export default RowProductPrice;
