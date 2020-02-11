/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';

import actionsForm from '../@cms/form/actions-page';
import { ActionsWrapper } from '../components/pages/actions.styled';
import Card from '../components/card';
import PageLayout from '../layouts/page';

interface Action {
  image: string;
  title: string;
  content: string;
  city: string;
  place: string;
}

interface ActionsPagProps {
  data: {
    actionsJson: {
      title: string;
      actions: Action[];
      rawJson: string;
      fileRelativePath: string;
      id: string;
    };
    allFile: any;
  };
}

const ActionsPage: React.FC<ActionsPagProps> = ({ data }) => {
  // eslint-disable-next-line no-param-reassign
  (data.actionsJson as any).files = data.allFile.edges;
  const [{ actions, title }] = useLocalJsonForm(data.actionsJson as any, actionsForm) as any;

  return (
    <PageLayout>
      <h1>{title}</h1>

      <ActionsWrapper>
        {actions.map((action: Action) => (
          <Card files={data.allFile.edges} {...action} />
        ))}
      </ActionsWrapper>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query ActionPageQuery {
    actionsJson {
      id
      title
      actions {
        image
        title
        content
        city
        place
      }
      rawJson
      fileRelativePath
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

export default ActionsPage;
