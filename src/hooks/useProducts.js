import { useQuery } from "@tanstack/react-query";
import api from "./../api";

export default function useProducts({ search }) {
  const {
    isLoading,
    data: products,
    refetch,
  } = useQuery(
    ["repoData"],
    async () => await api.get(`products?q=${search}`).json()
  );
  return { isLoading, products, refetch };
}
