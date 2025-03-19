import { 
  type INavigationLink, 
  IHeroBenefit, 
  IStep, 
  IService, 
  IBlogCard,
  ILocation
} from "./contentTypes";

import Booking from "../components/icons/Booking";
import Airplane from "../components/icons/Airplane";
import Guide from "../components/icons/Guide";
import Box from "../components/icons/Box";
import Culinary from "../components/icons/Culinary";
import Destination from "../components/icons/Destination";

// Navigation Links
const navigationLinks: INavigationLink[] = [
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

const heroBenefits: IHeroBenefit[] = [
  {
    id: 1,
    Icon: Booking,
    heading: "Easy Booking",
    description: "Your hassle-free solution for convenient."
  },
  {
    id: 2,
    Icon: Airplane,
    heading: "Airport Pickup",
    description: "Offers a reliable and convenient transportation service."
  },
  {
    id: 3,
    Icon: Guide,
    heading: "Best Guide",
    description: "trusted companion for exploring new destinations."
  }
];

const steps: IStep[] = [
  {
    id: 1,
    heading: "Reignite those travel tastebuds",
    description: "Embark on a gastronomic adventure  that transports you to distant lands, where every dish tells a story."
  },
  {
   id: 2,
   heading: "Get back to nature by travel",
   description: "Escape the hustle and bustle of daily life and reconnect with the serene beauty of the natural." 
  },
  {
    id: 3,
    heading: "Find trips that fit your freedom",
    description: "Embark on a gastronomic adventure  that transports you to distant lands, where every dish tells a story."
  }
];

const services: IService[] = [
  {
    id: 1,
    Icon: Box,
    heading: "Customized Packages",
    description: "Explore our range of customizable travel packages tailored to your budget and preferences."
  },
  {
    id: 2,
    Icon: Culinary,
    heading: "Culinary Tours",
    description: "Indulge in culinary delights from around the world with our curated food and wine tours."
  },
  {
    id: 3,
    Icon: Destination,
    heading: "Destination Expertise",
    description: "Benefit from our extensive knowledge of destinations worldwide for informed travel decisions."
  },
];

const blogs: IBlogCard[] = [
  {
    id: 1,
    img: "src/assets/blogCards/aroundTheGlobe.webp",
    alt: "Arial shot of a tropical beach",
    date: "Nov 11th, 2024",
    heading: "Stories from Around the Globe",
    description: "From the bustling streets of Tokyo to the serene landscapes of  Patagonia, each story offers a glimpse into the diverse cultures,  breathtaking landscapes, and unforget table encounters.",
  },
  {
    id: 2,
    img: "src/assets/blogCards/hiddenGems.webp",
    alt: "bungalows in the Maldives",
    date: "Dec 25th, 2024",
    heading: "Exploring Hidden Gems",
    description: "Dive into our latest blog post as we uncover the enchanting allure of  off the beaten path destinations. From secluded beaches to quaint  villages, we guide you on a journey to discover the hidden gems waiting  to be explored.",
  },
];

const locations: ILocation[] = [
  {
    id: 1,
    img: "src/assets/exploreMore/kudahuvadhoo.webp",
    alt: "An image of kudahuvadhoo in Central Province, Maldives",
    rating: 4.6,
    heading: "Kudahuvadhoo",
    location: "Central Province, Maldives",
    price: 127
  },
  {
    id: 2,
    img: "src/assets/exploreMore/greatBarrierReef.webp",
    alt: "An image of Great Barrier Reef in Queensland, Australia",
    rating: 4.2,
    heading: "Great Barrier Reef",
    location: "Queensland, Australia",
    price: 149
  },
  {
    id: 3,
    img: "src/assets/exploreMore/sonevaSecret.webp",
    alt: "An image of Soneva Secret in Makunudhoo, Maldives",
    rating: 4.5,
    heading: "Soneva Secret",
    location: "Makunudhoo, Maldives",
    price: 152
  },
  {
    id: 4,
    img: "src/assets/exploreMore/navagioBay.webp",
    alt: "An image of Navagio Bay in Zakynthos, Greece",
    rating: 4.5,
    heading: "Navagio Bay",
    location: "Zakynthos, Greece",
    price: 152
  },
  {
    id: 5,
    img: "src/assets/exploreMore/grandAnse.webp",
    alt: "An image of Grand Anse in Grenada, Caribbean",
    rating: 4.1,
    heading: "Grand Anse",
    location: "Grenada, Caribbean",
    price: 102
  },
  {
    id: 6,
    img: "src/assets/exploreMore/zakynthos.webp",
    alt: "An image of Zakynthos in Keri, Greece",
    rating: 4.4,
    heading: "Zakynthos",
    location: "Keri, Greece",
    price: 191
  },
  {
    id: 7,
    img: "src/assets/exploreMore/sonevaJani.webp",
    alt: "An image of Soneva Jani in Noonu Atoll, Maldives",
    rating: 4.9,
    heading: "Soneva Jani",
    location: "Noonu Atoll, Maldives",
    price: 340
  },
  {
    id: 8,
    img: "src/assets/exploreMore/fourSeasons.webp",
    alt: "An image of Four Seasons in Motu Tehotu, Bora Bora",
    rating: 4.3,
    heading: "Four Seasons",
    location: "Motu Tehotu, Bora Bora",
    price: 235
  },
  {
    id: 9,
    img: "src/assets/exploreMore/nusaPenida.webp",
    alt: "An image of Nusa Penida in Bali, Indonesia",
    rating: 4.2,
    heading: "Nusa Penida",
    location: "Bali, Indonesia",
    price: 191
  },
];

export { 
  navigationLinks, 
  heroBenefits,
  steps,
  services,
  blogs,
  locations
};
