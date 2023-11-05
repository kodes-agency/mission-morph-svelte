import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query faqPage {
      faqPage {
        data {
          attributes {
            seo {
              title
              description
            }
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
            faqSegment {
              segmentTitle
              segmentQuestion {
                question
                content
              }
            }
          }
        }
      }
    }
  `;

  return query;
}
