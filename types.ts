export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  link?: string;
}

export interface MenuItem {
  label: string;
  href: string;
}
