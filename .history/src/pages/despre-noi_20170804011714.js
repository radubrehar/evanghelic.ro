import React from 'react';
import Link from 'gatsby-link';

import Row from '../components/Row';

const AboutUs = () =>
  <div>
    <Row>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Row>
  </div>;

export default AboutUs;
