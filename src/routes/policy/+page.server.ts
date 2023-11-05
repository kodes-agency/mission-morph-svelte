import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/PolicyPage";


/** @type {import('@sveltejs/kit').Load} */
export const load = async () => {
    const data = getClient().query({
        query: query()
    })
    
    return await data
}