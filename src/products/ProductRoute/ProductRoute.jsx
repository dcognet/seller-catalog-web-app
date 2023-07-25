import { useParams } from "react-router-dom";

export default function ProductRoute() {
  let { id } = useParams();

  return `Product id = ${id}`;
}
