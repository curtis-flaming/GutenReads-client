import { client } from "@/api/fetchClient";
import { queryOptions } from "@tanstack/react-query";

export const currentUserOptions = queryOptions({
  queryKey: ["/api/users/current"],
  queryFn: () => client.GET("/api/users/current").then((res) => res.data),
  staleTime: 1000 * 60 * 5,
});
