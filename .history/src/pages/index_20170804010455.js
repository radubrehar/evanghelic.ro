import React from 'react';
import Link from 'gatsby-link';

import Menu from '../components/Menu';

const IndexPage = () =>
  <div>
    <Menu />

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>;

export default IndexPage;
