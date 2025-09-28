import { client } from "@/api/fetchClient";
import type { LoginRequest, RegisterRequest } from "@/api/openapi-ts/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useRegisterUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: RegisterRequest) => {
      return client.POST("/api/auth/register", { body });
    },
  });
}

export function useLoginUser() {
  return useMutation({
    mutationFn: (body: LoginRequest) => {
      return client.POST("/api/auth/login", { body });
    },
  });
}

export function useLogoutUser() {
  return useMutation({
    mutationFn: () => {
      return client.POST("/api/auth/logout");
    },
  });
}
