// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("/prducts/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ id: "product id", name: "product name" })
    );
  }),
];
