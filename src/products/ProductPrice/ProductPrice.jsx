import { shape, string } from "prop-types";
import withRow from "./../../hoc/withRow";

function ProductPrice({ price }) {
  return new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

ProductPrice.propTypes = {
  row: shape({
    price: string,
  }),
};

const RowProductPrice = withRow(ProductPrice);
export default RowProductPrice;
