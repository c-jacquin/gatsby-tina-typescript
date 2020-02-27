import { RemarkNode } from 'gatsby-tinacms-remark/src/remark-node';
import { ImageSharp } from './image';

export interface Post {
  frontmatter: {
    image: ImageSharp;
    description: string;
    keywords: Array<{ label: string }>;
    path: string;
    title: string;
    content: string;
    map: boolean;
    zoom: number;
    location: {
      address: string;
      lat: number;
      lng: number;
    };
    date: string;
    formattedDate: string;
    ownHero: boolean;
  };
  excerpt: string;
  html: string;
  markdownRemark: RemarkNode;
}

export interface PostEdges {
  posts?: {
    edges: Array<{
      node: Post;
    }>;
  };
}
