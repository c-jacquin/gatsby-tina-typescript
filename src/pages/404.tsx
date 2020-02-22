import { Link, graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';

import errorFormConfig from '../@cms/form/pages/404';
import PageLayout from '../layouts/page';

interface NotFoundProps {
  data: {
    errorJson: {
      title: string;
      message: string;
      rawJson: string;
      fileRelativePath: string;
      id: string;
    };
  };
}

const NotFoundPage: React.FC<NotFoundProps> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [values]: any = useLocalJsonForm(data.errorJson, errorFormConfig);

  if (!values) return null;

  return (
    <PageLayout>
      <h1>{values.title}</h1>
      <p>
        {values.message} <Link to="/">{values.link}</Link>
      </p>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query NotFoundQuery {
    pagesJson(fileRelativePath: { regex: "/404/" }) {
      title
      message
      link
      rawJson
      fileRelativePath
      id
    }
  }
`;

export default NotFoundPage;
