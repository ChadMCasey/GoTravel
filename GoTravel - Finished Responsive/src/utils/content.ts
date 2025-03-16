import { type navigationLinks } from "./contentTypes";

// Navigation Links
const navigationLinks: Array<navigationLinks> = [
  {
    id: 1,
    href: "/",
    text: "Home",
    dropdown: false
  },
  {
    id: 2,
    href: "/about",
    text: "About",
    dropdown: false
  },
  {
    id: 3,
    href: "/services",
    text: "Services",
    dropdown: true
  },
  {
    id: 4,
    href: "/pages",
    text: "Pages",
    dropdown: true
  },
  {
    id: 5,
    href: "/testimonials",
    text: "Testimonials",
    dropdown: false

  },
];

export { navigationLinks };
