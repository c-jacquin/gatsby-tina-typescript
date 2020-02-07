import React from 'react';
import { Link } from 'gatsby';

import PageLayout from '../layouts/page';

const PageTwo: React.FC = () => (
  <PageLayout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <ul>
      <li>
        <Link to="/">Take me back home.</Link>
      </li>
    </ul>
  </PageLayout>
);

export default PageTwo;
