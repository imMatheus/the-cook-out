import type { Post } from "@/types";
import { axios } from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

export async function getFeed() {
  return axios.get<Post[]>("/posts").then((post) => post.data);
}

export function useFeed(...options: UseQueryOptions[]) {
  const results = useQuery({
    ...options,
    queryKey: ["feed"],
    queryFn: () => getFeed(),
  });

  return results;
}
