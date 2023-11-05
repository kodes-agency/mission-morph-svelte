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
              title
            }
            publishedAt
            author
            shortSummary
            ctaHeading
            ctaButton
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
      homePage {
        data {
          attributes {
            blogs {
              data {
                id
                attributes {
                  title
                  slug
                  thumbnail {
                    data {
                      attributes {
                        alternativeText
                        url
                      }
                    }
                  }
                  publishedAt
                  blogCategories {
                    data {
                      attributes {
                        category
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }  
    }
  `;

  return query;
}
