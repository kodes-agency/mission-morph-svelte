import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query ServicePage($filters: ServiceFiltersInput) {
      servicePage {
        data {
          attributes {
            serviceCTA {
              title
              noButton
              yesButton
            }
            serviceCTA2 {
              image {
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
      services(filters: $filters) {
        data {
          attributes {
            color
            heroSection {
              image {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
              title
              content
              id
            }
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
            seo {
              title
              keywords
              description
            }
            statistics {
              number
              paragraph
            }
            subService {
              price
              title
              features {
                feature
              }
              contents
              id
              
            }
            title
          }
        }
      }
    }
  `;

  return query;
}
