import { useQuery } from "@tanstack/react-query";
import { API_URL } from "./const";

export default function useViewAllProducts() {
  return useQuery(["products"], async () => {
    const response = await fetch(`${API_URL}/viewAllProduct`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}
