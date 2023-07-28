import { rest } from "msw";

const apiUrl = (route) => `${import.meta.env.VITE_API_URL}${route}`;

export const handlers = [
  rest.get(apiUrl("/products/:id"), (req, res, ctx) => {
    const { id } = req.params;

    return res(
      ctx.status(200),
      ctx.json({ id, name: "product name", price: 10 })
    );
  }),
];
