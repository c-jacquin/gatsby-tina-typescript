import React from 'react';
import { Link, graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';

import PageLayout from '../layouts/page';
import { indexFormConfig } from '../@cms/form-config';

interface IndexProps {
  data: {
    indexJson: {
      hello: string;
      rawJson: string;
      fileRelativePath: string;
      id: string;
    };
  };
}

const IndexPage: React.FC<IndexProps> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [values] = useLocalJsonForm(data.indexJson, indexFormConfig) as any;

  if (!values) return null;

  return (
    <PageLayout>
      <p>{values.hello}</p>
      <Link to="/page-2/">{values.message}</Link>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query DataQuery {
    indexJson {
      hello
      message
      rawJson
      fileRelativePath
    }
  }
`;

export default IndexPage;
