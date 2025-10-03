import { client } from "@/api/fetchClient";
import type { LoginRequest, RegisterRequest } from "@/api/openapi-ts/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { currentUserOptions } from "../users/options";

export function useRegisterUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: RegisterRequest) => {
      return client.POST("/api/auth/register", { body });
    },
    onSuccess(responseData) {
      queryClient.setQueryData(currentUserOptions.queryKey, responseData.data);
    },
  });
}

export function useLoginUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: LoginRequest) => {
      return client.POST("/api/auth/login", { body });
    },
    onSuccess(responseData) {
      // queryClient.setQueryData(currentUserOptions.queryKey, responseData.data);
      queryClient.fetchQuery(currentUserOptions);
    },
  });
}

export function useLogoutUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return client.POST("/api/auth/logout");
    },
    onSuccess() {
      queryClient.refetchQueries(currentUserOptions);
    },
  });
}
