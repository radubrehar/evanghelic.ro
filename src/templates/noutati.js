import React from 'react';
import Helmet from 'react-helmet';

import Text from '@app/Text';

export default function NoutatiTemplate({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post, site } = data;

  return (
    <div css={{ paddingTop: 20 }} className="container">
      <Helmet
        title={`${site.siteMetadata.title} - ${post.frontmatter.title}`}
      />
      <div className="blog-post">
        <div className="row">
          <Text className="col" size="headline" css={{ marginBottom: 20 }}>
            {post.frontmatter.title}
          </Text>
        </div>
        <Text
          size="std-large"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const query = graphql`
  query NoutatiQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
