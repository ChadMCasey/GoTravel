import { JSX } from 'react';

interface NavigationLink {
  id: number;
  href: string;
  text: string;
  dropdown: boolean;
  dropdownLinks?: NavigationLink[]
}

interface HeroBenefit {
  id: number;
  Icon: (props: {className: string}) => JSX.Element;
  heading: string;
  description: string;
}

interface Step {
  id: number;
  heading: string;
  description: string;
}

interface Service {
  id: number;
  Icon: (props: {className: string}) => JSX.Element;
  heading: string;
  description: string;
}

interface BlogPost {
  id: string;
  img: string;
  alt: string;
  date: string,
  title: string,
  summary: string
}

interface Location {
  id: string;
  img: string;
  alt: string;
  rating: number;
  title: string;
  location: string;
  pricePerPerson: number;
}

interface Testimonial {
  id: number;
  img: string;
  alt: string;
  name: string;
  description: string;
  vacation: string; 
}

interface FooterLink {
  id: number;
  href: string;
  name: string;
  Icon?: (props: {className: string}) => JSX.Element;
}

interface FooterCol {
  id: number;
  heading: string;
  links: FooterLink[];
}

interface FooterSocials {
  id: number;
  alt: string;
  href: string;
  Icon: (props: {className: string}) => JSX.Element;
}

interface Lead {
  createdAt: number;
  fullName: string;
  emailAddress: string; 
}

export type {
  NavigationLink,
  HeroBenefit,
  Step,
  Service,
  BlogPost,
  Location,
  Testimonial,
  FooterCol,
  FooterSocials,
  FooterLink,
  Lead
}