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
            images {
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
            heroVercorLarge {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            heroVercorMedium {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            heroVercorSmall {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
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
            homePageCursorLable
            homePageCTA
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
    }
  `;

  return query;
}
