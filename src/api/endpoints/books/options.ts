import { client } from "@/api/fetchClient";
import { queryOptions } from "@tanstack/react-query";

export const getBooksOptions = () =>
  queryOptions({
    queryKey: ["/api/books"],
    queryFn: () => client.GET("/api/books").then((res) => res.data),
  });
