import React from 'react';
import { Link, graphql } from 'gatsby';
import { useLocalJsonForm, useGlobalJsonForm } from 'gatsby-tinacms-json';

import PageLayout from '../layouts/page';
import { indexFormConfig, seoFormConfig } from '../@cms/form-config';
import Seo from '../components/Seo';

interface IndexProps {
  data: {
    indexJson: {
      hello: string;
      rawJson: string;
      fileRelativePath: string;
      id: string;
    };
    dataJson: {
      id: string;
      title: string;
      description: string;
      keywords: string;
      fileRelativePath: string;
      rawJson: string;
    };
  };
}

const IndexPage: React.FC<IndexProps> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [values] = useLocalJsonForm(data.indexJson, indexFormConfig) as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [seo] = useGlobalJsonForm(data.dataJson, seoFormConfig) as any;

  if (!values || !seo) return null;

  return (
    <PageLayout>
      <Seo data={seo} />
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
    dataJson {
      id
      title
      description
      fileRelativePath
      keywords {
        label
      }
      rawJson
    }
  }
`;

export default IndexPage;
