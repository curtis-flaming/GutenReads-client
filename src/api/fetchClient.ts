import createClient, { type Middleware } from "openapi-fetch";
import type { paths } from "./type-gen/schema";

const authMiddleware: Middleware = {
  async onRequest({ request }) {
    const jwt = localStorage.getItem("access_token");

    request.headers.set("Authorization", "Bearer " + jwt);
    return request;
  },
};

const fetchClient = createClient<paths>({ baseUrl: "http://localhost:5211/" }); // TODO: change to env
fetchClient.use(authMiddleware);

export { fetchClient as client };
