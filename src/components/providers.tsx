import { type NavigateOptions, type ToOptions, useRouter } from "@tanstack/react-router";
import { RouterProvider } from "react-aria-components";
import { ThemeProvider } from "./theme-provider";

declare module "react-aria-components" {
  interface RouterConfig {
    href: ToOptions;
    routerOptions: Omit<NavigateOptions, keyof ToOptions>;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <RouterProvider
      navigate={(path, options) => router.navigate({ ...path, ...options })}
      useHref={({ to }) => router.buildLocation({ to }).href}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </RouterProvider>
  );
}
