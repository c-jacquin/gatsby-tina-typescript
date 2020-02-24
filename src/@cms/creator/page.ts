import _ from 'lodash';
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark';

const CreatePostPlugin = new RemarkCreatorPlugin({
  label: 'Nouvelle Page',
  fields: [
    { name: 'label', label: 'Label', component: 'text', required: true },
    { name: 'path', label: 'Path', component: 'text', required: true },
    { name: 'layout', label: 'Layout', component: 'select', options: ['1col', '2col', 'paper'], required: true },
  ],
  filename: form => {
    const slug = form.title.replace(/\s+/, '-').toLowerCase();

    return `content/blog/${slug}/index.md`;
  },
  frontmatter: form => ({
    ...form,
    path: form.path || `/${form.label.replace(/\s+/, '-').toLowerCase()}`,
    sections: [],
    aside: form.layout === '2col' ? [] : null,
  }),
});

export default CreatePostPlugin;
