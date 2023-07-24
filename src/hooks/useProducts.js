import { useQuery } from "@tanstack/react-query";
import api from "./../api";

export default function useProducts() {
  const { isLoading, data: products } = useQuery(
    ["repoData"],
    async () => await api.get("products").json()
  );
  return { isLoading, products };
}
