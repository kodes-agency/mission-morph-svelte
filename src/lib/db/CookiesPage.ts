import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query CookiesPage {
      cookiesPage {
        data {
          attributes {
            heading
            content
          }
        }
      }
    }
  `;

  return query;
}
