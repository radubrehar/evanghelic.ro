import React from 'react';
import Link from 'gatsby-link';

import { accentColor } from '@app/colors';
import Text from '@app/Text';
import Card from '@app/Card';
import Contact from './contact';

const IndexPage = ({ data }) => {
  console.log(data.allMarkdownRemark.edges);
  const news = (data.allMarkdownRemark.edges || []).map(edge => {
    return {
      title: edge.node.frontmatter.title,
      url: edge.node.fields.slug,
      summary: edge.node.excerpt
    };
  });

  console.log(news);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Text size="headline">Bine ați venit!</Text>
            <Text size="std-large">
              <p>
                <b>Viziunea</b> noastră este ca{' '}
                <b>Biserică locală să crească</b> prin trăirea unei vieți
                creștine autentice <b>în cadrul familiilor</b> din care e
                formată.
              </p>
              <p>
                <b>Creșterea</b> presupune atât aspectul <b>numeric</b> (ca și
                alții să creadă despre Hristos și să creadă în El) cât și cel{' '}
                <b>spiritual</b>, al creșterii spre asemănarea cu Domnul Isus
                Hristos.
              </p>
              <p>
                De ce în familii? Pentru că o familie creștină sănătoasă este
                nucleul unei Biserici sănătoase; pentru că familia e atacată azi
                mai mult decât oricând; pentru că fiecare dintre noi e parte
                dintr-o familie. În felul acesta, întreaga Biserică e implicată
                în împlinirea viziunii de a trăi o viață creștină împlinită prin
                cunoașterea Domnului Isus Hristos.
              </p>
            </Text>
          </div>
        </div>
      </div>

      <div className="container-fluid" css={{ background: accentColor }}>
        <div className="container">
          <div
            className="row"
            style={{ paddingBottom: 20, paddingTop: 20, marginBottom: 20 }}
          >
            {news.map(article => {
              return (
                <div key={article.url} className="col-12 col-md-6">
                  <Card
                    className="col-12"
                    title={article.title}
                    subtitle="Duminică, 26 noiembrie 2017"
                    actions={[<Link to={article.url}>Citește mai mult</Link>]}
                    children={
                      <div
                        dangerouslySetInnerHTML={{ __html: article.summary }}
                      />
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
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
            title
          }
        }
      }
    }
  }
`;
