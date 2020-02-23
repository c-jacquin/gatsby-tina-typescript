/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from 'lodash';
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark';

const CreatePostPlugin = new RemarkCreatorPlugin({
  label: 'Nouvelle Action',
  fields: [
    { name: 'title', label: 'Titre', component: 'text', required: true },
    {
      name: 'image',
      label: 'Image',
      component: 'image',
      parse: (filename: string) => `../../assets/images/${filename}`,

      previewSrc: (formValues: any, { input }: any) => {
        const path = input.name.replace('rawFrontmatter', 'frontmatter');
        const gastbyImageNode = _.get(formValues, path);
        if (!gastbyImageNode) return '';
        // specific to gatsby-image
        return gastbyImageNode.childImageSharp ? gastbyImageNode.childImageSharp.fluid.src : gastbyImageNode;
      },

      uploadDir: () => {
        return '/content/assets/images/';
      },
      required: true,
    },
    { name: 'city', label: 'Ville', component: 'text', required: true },
    { name: 'place', label: 'Salle de concert', component: 'text', required: true },
    { name: 'date', label: 'Date', component: 'date', required: true },
  ],
  filename: form => {
    const slug = form.title.replace(/\s+/, '-').toLowerCase();

    return `content/blog/${slug}/index.md`;
  },
  frontmatter: form => ({
    ...form,
    path: `/${form.title.replace(/\s+/, '-').toLowerCase()}`,
  }),
});

export default CreatePostPlugin;
