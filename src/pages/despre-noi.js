import React from 'react';
import Link from 'gatsby-link';

import Row from '../components/Row';

const AboutUs = () => (
  <div className="container">
    <div className="row">
      <p>Mai multe informatii despre noi....</p>
      <Link to="/contact">Go to contact page</Link>
    </div>
  </div>
);

export default AboutUs;