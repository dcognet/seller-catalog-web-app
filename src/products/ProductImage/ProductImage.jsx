import { string } from "prop-types";
import withRow from "./../../hoc/withRow";

function ProductImage({ imageUrl, name }) {
  return <img src={imageUrl} alt={name} />;
}

ProductImage.propTypes = {
  imageUrl: string,
  name: string,
};

const RowPProductImage = withRow(ProductImage);
export default RowPProductImage;
