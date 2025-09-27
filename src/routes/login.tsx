import { Auth } from "@/pages/auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: Auth,
});
