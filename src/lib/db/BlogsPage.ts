import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query Blogs($filters: BlogFiltersInput) {
      blogCategories {
        data {
          attributes {
            category
          }
        }
      }
      blogs(filters: $filters) {
        data {
          id
          attributes {
            slug
            blogCategories {
              data {
                attributes {
                  category
                }
              }
            }
            thumbnail {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            title
            publishedAt
          }
        }
      }
      homePage {
        data {
          attributes {
            blogHeading
            blogThumbnail {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            blogContent
          }
        }
      }
    }
  `;

  return query;
}
