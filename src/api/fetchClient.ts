import createClient, { type Middleware } from "openapi-fetch";
import type { paths } from "./openapi-ts/generated-schema";

const authMiddleware: Middleware = {
  onResponse({ response }) {
    console.log("onResponse", response);
  },
};

const fetchClient = createClient<paths>({
  baseUrl: "https://gutenreads-production.up.railway.app/",
  // baseUrl: "/",
  credentials: "include", // Include cookies in requests
});

fetchClient.use(authMiddleware);

export { fetchClient as client };
