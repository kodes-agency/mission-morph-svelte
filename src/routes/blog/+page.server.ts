import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/BlogsPage";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
  const data = getClient().query({
    query: query(),
    variables: {
      filters: url.searchParams.getAll("category").length > 0 ? {
        blogCategories: {
          category: {
            in: url.searchParams.getAll('category'),
          },
        },
      }
      : null
    },
  });

  return await data;
};
