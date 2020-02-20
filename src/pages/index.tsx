/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { graphql } from 'gatsby';
import { useLocalJsonForm, useGlobalJsonForm } from 'gatsby-tinacms-json';

import indexFormConfig from '../@cms/form/index-page';
import settingsForm from '../@cms/form/settings';
import BlogPostList from '../components/blog-post-list';
import { IndexAside, IndexContainer, IndexMain } from '../components/pages/index.styled';
import { FormProvider } from '../context/form';
import PageLayout from '../layouts/page';
import NewsletterForm from '../components/form-newsletter';
import Blocks from '../components/blocks';

interface IndexProps {
  data: {
    pagesJson: {
      sections: string;
      rawJson: string;
      fileRelativePath: string;
      id: string;
    };
    settingsJson: {
      rawJson: string;
      fileRelativePath: string;
      id: string;
      apiUrl: string;
      newsletterLabel: string;
    };
    allFile: any;
  };
}

const IndexPage: React.FC<IndexProps> = ({ data }) => {
  // eslint-disable-next-line no-param-reassign
  (data.pagesJson as any).files = data.allFile.edges;
  const [values] = useLocalJsonForm(data.pagesJson, indexFormConfig) as any;
  const [{ apiUrl, newsletterLabel, newsletterEmailErrorLabel, newsletterErrorLabel, newsletterSuccessLabel }] = useGlobalJsonForm(
    data.settingsJson,
    settingsForm,
  ) as any;

  if (!values) return null;

  return (
    <FormProvider apiUrl={apiUrl}>
      <PageLayout>
        <IndexContainer>
          <IndexMain>
            <Blocks allFile={data.allFile} sections={values.sections} />
          </IndexMain>
          <IndexAside>
            <NewsletterForm
              label={newsletterLabel}
              errorLabel={newsletterErrorLabel}
              emailErrorLabel={newsletterEmailErrorLabel}
              successLabel={newsletterSuccessLabel}
            />
            <BlogPostList />
          </IndexAside>
        </IndexContainer>
      </PageLayout>
    </FormProvider>
  );
};

export const pageQuery = graphql`
  query IndexPageQuery {
    pagesJson(fileRelativePath: { regex: "/index/" }) {
      rawJson
      id
      fileRelativePath
      ...Block
    }
    settingsJson {
      rawJson
      id
      fileRelativePath
      apiUrl
      newsletterLabel
      newsletterEmailErrorLabel
      newsletterErrorLabel
      newsletterSuccessLabel
    }
    allFile {
      ...FluidImg
    }
  }
`;

export default IndexPage;
