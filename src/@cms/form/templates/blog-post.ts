/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from 'lodash';

const blogPostForm = {
  fields: [
    {
      label: 'Titre',
      name: 'rawFrontmatter.title',
      component: 'text',
    },
    {
      label: 'Image',
      name: 'rawFrontmatter.image',
      component: 'image',
      parse: (filename: string) => `../../assets/images/${filename}`,

      previewSrc: (formValues: any, { input }: any) => {
        const path = input.name.replace('rawFrontmatter', 'frontmatter');
        const gastbyImageNode = _.get(formValues, path);
        if (!gastbyImageNode) return '';
        // specific to gatsby-image
        return gastbyImageNode.childImageSharp.fluid.src;
      },

      uploadDir: () => {
        return '/content/assets/images/';
      },
    },
    {
      label: 'City',
      name: 'rawFrontmatter.city',
      component: 'text',
    },
    {
      label: 'Concert hall',
      name: 'rawFrontmatter.place',
      component: 'text',
    },
    {
      label: 'Date',
      name: 'rawFrontmatter.date',
      component: 'date',
    },
    {
      label: 'style',
      name: 'rawFrontmatter.style',
      component: 'css',
    },
  ],
};

export default blogPostForm;
