import { JSX } from 'react';

interface Identifiable {
  id: number;
}

interface INavigationLink extends Identifiable {
  href: string;
  text: string;
  dropdown: boolean;
}

interface IHeroBenefit extends Identifiable {
  Icon: (props: {className: string}) => JSX.Element;
  heading: string;
  description: string;
}

interface IStep extends Identifiable {
  heading: string;
  description: string;
}

interface IService extends Identifiable {
  Icon: (props: {className: string}) => JSX.Element;
  heading: string;
  description: string;
}

interface IBlogCard extends Identifiable {
  img: string;
  alt: string;
  date: string,
  heading: string,
  description: string
}

interface ILocation extends Identifiable {
  img: string;
  alt: string;
  rating: number;
  heading: string;
  location: string;
  price: number;
}

export type {
  INavigationLink,
  IHeroBenefit,
  IStep,
  IService,
  IBlogCard,
  ILocation
}