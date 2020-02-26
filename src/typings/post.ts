import { ImageSharp } from './image';

export interface Post {
  frontmatter: {
    image: ImageSharp;
    description: string;
    keywords: Array<{ label: string }>;
    path: string;
    title: string;
    content: string;
    city: string;
    place: string;
    date: string;
    ownHero: boolean;
  };
  excerpt: string;
  html: string;
}

export interface PostEdges {
  posts?: {
    edges: Array<{
      node: Post;
    }>;
  };
}
