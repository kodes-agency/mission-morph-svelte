import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/SingleServicePage";


/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params }) => {
    const data = getClient().query({
        query: query(),
        variables: {
            "filters": {
              "homePageTitle": {
                "eqi": `${params.slug}`
              }
            }
          }
    })
    
    return await data
}