import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query HomePage {
      homePage {
        data {
          attributes {
            heroHeading
            aboutHeading
            aboutContent
            aboutImage {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            blogContent
            blogHeading
            blogThumbnail {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            ctaContent
            ctaHeading
            ctaImage {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            servicesHeading
            seo {
              keywords
              title
              description
            }
          }
        }
      }
      services {
        data {
          attributes {
            slug
            color
            homePageContent
            homePageThumbnail {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            homePageTitle
          }
        }
      }
      blogs {
        data {
          attributes {
            title
            slug
            publishedAt
            thumbnail {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            seo {
              description
            }
          }
        }
      }
    }
  `;

  return query;
}
