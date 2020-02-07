import React from 'react';
import { Link } from 'gatsby';

import PageLayout from '../layouts/page';

const NotFoundPage: React.FC = () => (
  <PageLayout>
    <h1>404: Page not found.</h1>
    <p>
      You&apos;ve hit the void. <Link to="/">Go back.</Link>
    </p>
  </PageLayout>
);

export default NotFoundPage;
