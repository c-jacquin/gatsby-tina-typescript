import React from 'react';
import Helmet from 'react-helmet';

interface SeoProps {
  data: {
    title: string;
    description: string;
    keywords: Array<{ label: string }>;
  };
}

const Seo: React.FC<SeoProps> = ({ data }) => (
  <Helmet
    title={data.title}
    meta={[
      { name: 'description', content: data.description },
      { name: 'keywords', content: data.keywords.map(({ label }) => label).join(',') },
    ]}
  />
);

export default Seo;
