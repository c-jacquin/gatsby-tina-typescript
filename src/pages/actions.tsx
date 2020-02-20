/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';

import actionsForm from '../@cms/form/actions-page';
import Blocks from '../components/blocks';
import PageLayout from '../layouts/page';

interface ActionsPagProps {
  data: {
    pagesJson: any;
    allFile: any;
  };
}

const ActionsPage: React.FC<ActionsPagProps> = ({ data }) => {
  const [values] = useLocalJsonForm(data.pagesJson, actionsForm) as any;

  if (!values) {
    return null;
  }

  return (
    <PageLayout>
      <Blocks sections={values.sections || []} allFile={data.allFile} />
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query ActionPageQuery {
    pagesJson(fileRelativePath: { regex: "/actions/" }) {
      rawJson
      id
      fileRelativePath
      ...Block
    }
    allFile {
      ...FluidImg
    }
  }
`;

export default ActionsPage;
