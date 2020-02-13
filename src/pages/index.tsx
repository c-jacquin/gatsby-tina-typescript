/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';

import indexFormConfig from '../@cms/form/index-page';
import Banner from '../components/banner';
import MdContent from '../components/md-content';
import { PageTitle } from '../components/title';
import { IndexAside, IndexContainer, IndexMain } from '../components/pages/index.styled';
import PageLayout from '../layouts/page';

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
    allFile: any;
  };
}

const IndexPage: React.FC<IndexProps> = ({ data }) => {
  // eslint-disable-next-line no-param-reassign
  (data.indexJson as any).files = data.allFile.edges;
  const [values] = useLocalJsonForm(data.indexJson, indexFormConfig) as any;

  if (!values) return null;

  return (
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
          <div>Aside</div>
        </IndexAside>
      </IndexContainer>
    </PageLayout>
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
