import { client } from "@/api/fetchClient";
import type { LoginRequest, RegisterRequest } from "@/api/openapi-ts/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { currentUserOptions } from "../users/options";

export function useRegisterUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: RegisterRequest) => {
      return client.POST("/api/auth/register", { body });
    },
    onSuccess(responseData) {
      Cookies.set("token", responseData.data?.token as string);
      queryClient.setQueryData(currentUserOptions.queryKey, responseData.data?.user);
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
      Cookies.set("token", responseData.data?.token as string);
      queryClient.fetchQuery(currentUserOptions);
    },
  });
}

export function useLogoutUser() {
  const queryClient = useQueryClient();
  return useMutation({
    onMutate() {
      Cookies.remove("token");
      queryClient.clear();
    },
  });
}
