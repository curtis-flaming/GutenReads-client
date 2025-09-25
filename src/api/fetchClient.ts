import createClient, { type Middleware } from "openapi-fetch";
import type { paths } from "./type-gen/schema";

const authMiddleware: Middleware = {
  async onRequest({ request }) {
    const jwt = localStorage.getItem("access_token");

    request.headers.set("Authorization", "Bearer " + jwt);
    return request;
  },
};

const client = createClient<paths>({ baseUrl: "http://localhost:5211/api/" }); // TODO: change to env

export { client };
