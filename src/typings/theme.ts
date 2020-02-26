import { ImageSharp } from './image';

export interface Ui {
  bright: string;
  light: string;
  whisper: string;
}

export interface Gray {
  dark: string;
  calm: string;
}

export interface Colors {
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  warning: string;
  ui: Ui;
  code: string;
  gray: Gray;
  white: string;
  black: string;
}

export interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface Widths {
  md: number;
  lg: number;
  xl: number;
}

export interface FontSize {
  regular: number;
  large: number;
}

export interface HeadingSizes {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
}

export interface LineHeight {
  regular: number;
  heading: number;
}

export interface Dimensions {
  breakpoints: Breakpoints;
  widths: Widths;
  fontSize: FontSize;
  headingSizes: HeadingSizes;
  lineHeight: LineHeight;
  containerPadding: string;
}

export interface Fonts {
  sansSerif: string;
  serif: string;
  monospace: string;
}

export interface Hero {
  image: ImageSharp;
  headline: string;
  textline: string;
  large: boolean;
  display: boolean;
  overlay: boolean;
  opacity: number;
  parallax: number;
}

export interface Header {
  linkSpace: string;
  color: string;
  activeLinkColor: string;
  fontSize: string;
  backgroundColor: string;
  logo: string;
  mobileLogo: string;
  withLogo: boolean;
  sideMenuType: string;
  height: number;
  heightLg: number;
  opacity: number;
}

export interface Footer {
  height: number;
}

export interface Theme {
  colors: Colors;
  dimensions: Dimensions;
  fonts: Fonts;
  hero: Hero;
  header: Header;
  footer: Footer;
}
