import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/SingleBlogPage";


/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params }) => {
    const data = getClient().query({
        query: query(),
        variables: {
            "filters": {
              "title": {
                "eqi": `${params.slug}`
              }
            }
          }
    })
    
    return await data
}