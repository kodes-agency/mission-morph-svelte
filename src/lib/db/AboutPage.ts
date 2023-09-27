import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query AboutPage {
      aboutPage {
        data {
          attributes {
            heroHeading
            heroContent
            heroThumbnail {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            ctaHeading
            ctaContent
            ctaButton
            seo {
              description
              keywords
              title
            }
            step {
              content
              title
              id
            }
          }
        }
      }
    }
  `;

  return query;
}
