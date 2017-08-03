import React from 'react';
import Link from 'gatsby-link';

import Row from '../components/Row';

const AboutUs = () =>
  <div>
    <Row>
      <p>Mai multe informatii despre noi....</p>

      <Link to="/contact">Go to contact page</Link>
    </Row>
  </div>;

export default AboutUs;
