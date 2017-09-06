import React from 'react';
import Link from 'gatsby-link';

import Contact from './contact';

const IndexPage = ({ data }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Bine ati venit!</p>
            <p>
              Gasiti adresa noastra pe pagina de{' '}
              <Link to="/page-2/">contact</Link>.
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query WelcomeQuery {
    site {
      siteMetadata {
        welcome
      }
    }
  }
`;