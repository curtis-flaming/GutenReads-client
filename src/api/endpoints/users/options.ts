import { client } from "@/api/fetchClient";
import { queryOptions } from "@tanstack/react-query";

export const currentUserOptions = queryOptions({
  queryKey: ["currentUser"],
  queryFn: () => client.GET("/api/users/current"),
});
