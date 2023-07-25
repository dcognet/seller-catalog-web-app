import { string } from "prop-types";

export default function ProductImage({ imageUrl, name }) {
  return <img width="100" src={imageUrl} alt={name} />;
}

ProductImage.propTypes = {
  imageUrl: string,
  name: string,
};
