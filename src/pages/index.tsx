/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';

import indexFormConfig from '../@cms/form/index-page';
import settingsForm from '../@cms/form/settings';
import Banner from '../components/banner';
import BlogPostList from '../components/blog-post-list';
import MdContent from '../components/md-content';
import { PageTitle } from '../components/title';
import { IndexAside, IndexContainer, IndexMain } from '../components/pages/index.styled';
import { FormProvider } from '../context/form';
import PageLayout from '../layouts/page';
import NewsletterForm from '../components/form-newsletter';

enum template {
  BannerBlock = 'BannerBlock',
  ContentBlock = 'ContentBlock',
  TitleBlock = 'TitleBlock',
}

interface IndexProps {
  data: {
    indexJson: {
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
  (data.indexJson as any).files = data.allFile.edges;
  const [values] = useLocalJsonForm(data.indexJson, indexFormConfig) as any;
  const [{ apiUrl, newsletterLabel, newsletterEmailErrorLabel, newsletterErrorLabel, newsletterSuccessLabel }] = useLocalJsonForm(
    data.settingsJson,
    settingsForm,
  ) as any;

  if (!values) return null;

  return (
    <FormProvider apiUrl={apiUrl}>
      <PageLayout>
        <IndexContainer>
          <IndexMain>
            {values.sections.map(({ _template, title, content, style, image, height, parallax }: any) => {
              switch (_template) {
                case template.TitleBlock:
                  return <PageTitle>{title}</PageTitle>;
                case template.ContentBlock:
                  return <MdContent markdown={content} style={style} />;
                case template.BannerBlock:
                  return (
                    <Banner image={image} height={height} parallax={parallax} files={data.allFile.edges}>
                      {title}
                    </Banner>
                  );
                default:
                  return null;
              }
            })}
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
    indexJson {
      rawJson
      id
      fileRelativePath
      sections {
        _template
        style
        content
        image
        parallax
        height
        title
      }
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
      edges {
        node {
          relativePath
          childImageSharp {
            fixed {
              src
            }
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
