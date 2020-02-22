/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';

import pageForm from '../@cms/form/templates/page-1col';
import Blocks from '../components/blocks';
import PageLayout from '../layouts/page';

const ContactPage: React.FC<{ data: any }> = ({ data }) => {
  const [values] = useLocalJsonForm(data.pagesJson, pageForm) as any;

  return (
    <PageLayout>
      <Blocks sections={values.sections || []} allFile={data.allFile} />
    </PageLayout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPageQuery {
    pagesJson(fileRelativePath: { regex: "/contact/" }) {
      rawJson
      id
      fileRelativePath
      ...SectionsBlock
    }
    allFile {
      ...FluidImg
    }
  }
`;
