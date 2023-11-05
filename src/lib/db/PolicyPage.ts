import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query PolicyPage {
      policyPage {
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
