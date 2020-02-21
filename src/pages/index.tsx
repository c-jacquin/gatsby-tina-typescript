/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';

import Page2colForm from '../@cms/form/page-2col';

import { IndexAside, IndexContainer, IndexMain } from '../components/pages/index.styled';
import PageLayout from '../layouts/page';
import Blocks from '../components/blocks';

interface IndexProps {
  data: {
    pagesJson: {
      sections: any[];
      aside: any[];
      rawJson: string;
      fileRelativePath: string;
      id: string;
    };
    allFile: any;
  };
}

const IndexPage: React.FC<IndexProps> = ({ data }) => {
  (data.pagesJson as any).files = data.allFile.edges;
  const [values] = useLocalJsonForm(data.pagesJson as any, Page2colForm) as any;

  if (!values) return null;

  return (
    <PageLayout>
      <IndexContainer>
        <IndexMain>
          <Blocks allFile={data.allFile} sections={values.sections || []} />
        </IndexMain>
        <IndexAside>
          <Blocks allFile={data.allFile} sections={values.aside || []} />
        </IndexAside>
      </IndexContainer>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query IndexPageQuery {
    pagesJson(fileRelativePath: { regex: "/index/" }) {
      rawJson
      id
      fileRelativePath
      ...SectionsBlock
      ...AsideBlock
    }
    allFile {
      ...FluidImg
    }
  }
`;

export default IndexPage;
