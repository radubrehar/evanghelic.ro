import React from 'react';
import Helmet from 'react-helmet';

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post, site } = data;

  return (
    <div css={{ paddingTop: 20 }} className="container">
      <Helmet
        title={`${site.siteMetadata.title} - ${post.frontmatter.title}`}
      />
      <div className="blog-post">
        <div className="row justify-content-center">
          <h1>{post.frontmatter.title}</h1>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
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