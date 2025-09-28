import createClient, { type Middleware } from "openapi-fetch";
import type { paths } from "./openapi-ts/raw-schema";

const authMiddleware: Middleware = {
  async onRequest({ request }) {
    const jwt = localStorage.getItem("access_token");

    request.headers.set("Authorization", "Bearer " + jwt);
    return request;
  },
};

const fetchClient = createClient<paths>({
  baseUrl: "/",
  credentials: "include", // Include cookies in requests
});

fetchClient.use(authMiddleware);

export { fetchClient as client };
