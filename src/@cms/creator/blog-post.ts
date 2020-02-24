/* eslint-disable @typescript-eslint/no-explicit-any */
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark';
import { imageField } from '../form/common';

const CreatePostPlugin = new RemarkCreatorPlugin({
  label: 'Nouvelle Action',
  fields: [
    { name: 'title', label: 'Titre', component: 'text', required: true },
    {
      name: 'image',
      label: 'Image',
      component: 'image',
      uploadDir: () => {
        return '/content/assets/images/';
      },
      required: true,
      ...imageField,
    },
    { name: 'city', label: 'Ville', component: 'text', required: true },
    { name: 'place', label: 'Salle de concert', component: 'text', required: true },
    { name: 'date', label: 'Date', component: 'date', required: true },
  ],
  filename: form => {
    const slug = form.title.replace(/\s+/, '-').toLowerCase();

    return `content/blog/${slug}.md`;
  },
  frontmatter: form => ({
    ...form,
    path: `/${form.title.replace(/\s+/, '-').toLowerCase()}`,
  }),
});

export default CreatePostPlugin;
