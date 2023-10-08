import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query SingleBlog($filters: BlogFiltersInput) {
      blogs(filters: $filters) {
        data {
          attributes {
            blogCategories {
              data {
                attributes {
                  category
                }
              }
            }
            contents
            slug
            seo {
              description
              keywords
              title
            }
            publishedAt
            thumbnail {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            title
          }
        }
      }
    }
  `;

  return query;
}
