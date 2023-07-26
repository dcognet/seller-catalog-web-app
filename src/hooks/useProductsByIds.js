import { useQuery } from "@tanstack/react-query";
import api from "../api";

export default function useProductsByIds({ ids }) {
  const searchParams = new URLSearchParams();
  ids.forEach((element) => {
    searchParams.append("id", element);
  });

  const { isLoading, data: products } = useQuery({
    queryKey: ["products", { ids }],
    queryFn: async () =>
      ids.length > 0 ? api.get("products", { searchParams }).json() : [],
  });

  return { isLoading, products };
}
