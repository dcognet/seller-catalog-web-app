import { useQuery } from "@tanstack/react-query";
import api from "./../api";

export default function useProducts({ search, id }) {
  const {
    isLoading,
    data: products,
    refetch,
  } = useQuery({
    queryKey: id ? ["products", id] : ["products"],
    queryFn: async () => {
      const apiRoute = id ? `products/${id}` : `products?q=${search}`;
      return await api.get(apiRoute).json();
    },
  });
  return { isLoading, products, refetch };
}
