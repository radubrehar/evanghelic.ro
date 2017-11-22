import React from 'react';
import Link from 'gatsby-link';

import Text from '@app/Text';
import Card from '@app/Card';

import Contact from './contact';

import WelcomeContainer from 'src/components/WelcomeContainer';
import NewsContainer from 'src/components/NewsContainer';

const IndexPage = ({ data }) => {
  const news = (data.allMarkdownRemark.edges || []).map(edge => {
    return {
      title: edge.node.frontmatter.title,
      date: edge.node.frontmatter.date,
      url: edge.node.fields.slug,
      summary: edge.node.excerpt
    };
  });

  return (
    <div>
      <WelcomeContainer />
      <NewsContainer news={news} />
      <Contact />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query NewsQuery {
    allMarkdownRemark(filter: { fields: { sourceName: { eq: "noutati" } } }) {
      edges {
        node {
          html
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`;
