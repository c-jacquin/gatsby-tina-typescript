/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';

import actionsForm from '../@cms/form/actions-page';
import BlogPostGrid from '../components/blog-post-grid';
import PageLayout from '../layouts/page';

interface ActionsPagProps {
  data: {
    actionsJson: {
      title: string;
      rawJson: string;
      fileRelativePath: string;
    };
  };
}

const ActionsPage: React.FC<ActionsPagProps> = ({ data }) => {
  const [{ title }] = useLocalJsonForm(data.actionsJson as any, actionsForm) as any;

  return (
    <PageLayout>
      <h1>{title}</h1>
      <BlogPostGrid />
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query ActionPageQuery {
    actionsJson {
      title
      rawJson
      fileRelativePath
    }
  }
`;

export default ActionsPage;
