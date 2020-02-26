export interface Link {
  label: string;
  path: string;
}

export interface Menu {
  name: string;
  links: Link[];
}

export interface Menus {
  menus: Menu[];
}
