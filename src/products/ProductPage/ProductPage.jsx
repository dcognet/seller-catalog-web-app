import { useParams } from "react-router-dom";

export default function ProductPage() {
  let { id } = useParams();

  return `Product id = ${id}`;
}
