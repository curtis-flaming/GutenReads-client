import Cookies from "js-cookie";
import createClient, { type Middleware } from "openapi-fetch";
import type { paths } from "./openapi-ts/generated-schema";

const authMiddleware: Middleware = {
  onRequest({ request }) {
    const token = Cookies.get("token");
    if (token) {
      request.headers.set("Authorization", `Bearer ${token}`);
    }
  },
};

const fetchClient = createClient<paths>({
  baseUrl: import.meta.env.VITE_API_URL || "/",
  credentials: "include", // Include cookies in requests
});

fetchClient.use(authMiddleware);

export { fetchClient as client };
