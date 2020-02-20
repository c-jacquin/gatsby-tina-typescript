export interface Action {
  image: string;
  path: string;
  title: string;
  content: string;
  city: string;
  place: string;
  date: string;
}

export interface ActionEdges {
  posts?: {
    edges: Array<{
      node: {
        frontmatter: {
          image: { childImageSharp: { fluid: { src: string } } };
          title: string;
          path: string;
          date: string;
          city: string;
          place: string;
        };
      };
      excerpt: string;
    }>;
  };
}
