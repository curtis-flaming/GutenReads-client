import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanstackDevtools } from "@tanstack/react-devtools";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";

import type { QueryClient } from "@tanstack/react-query";
import AppNavbar from "@/components/layout/app-navbar";
import { Providers } from "@/components/providers";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Providers>
      <AppNavbar />
      <Outlet />
      {/* <TanstackDevtools
        config={{
          position: "bottom-left",
          openHotkey: [""],
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
          TanStackQueryDevtools,
        ]}
      /> */}
    </Providers>
  );
}
