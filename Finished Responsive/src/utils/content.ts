import { 
  type NavigationLink, 
  HeroBenefit, 
  Step, 
  Service, 
  Testimonial,
  FooterCol,
  FooterSocials,
} from "./contentTypes";

import Booking from "../components/icons/Booking";
import Airplane from "../components/icons/Airplane";
import Guide from "../components/icons/Guide";
import Box from "../components/icons/Box";
import Culinary from "../components/icons/Culinary";
import Destination from "../components/icons/Destination";
import Linkedin from "../components/icons/Linkedin";
import Instagram from "../components/icons/Instagram";
import WhatsApp from "../components/icons/WhatsApp";
import Phone from "../components/icons/Phone";
import Email from "../components/icons/Email";
import Location from "../components/icons/Location";

// Navigation Links
const navigationLinks: NavigationLink[] = [
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
    dropdown: true,
    dropdownLinks: [
      {
        id: 1,
        href: "/culinaryTours",
        text: "Culinary Tours",
        dropdown: false
      },
      {
        id: 2,
        href: "/destinationExpertise",
        text: "Destination Expertise",
        dropdown: false
      },
      {
        id: 3,
        href: "/customizedPackages",
        text: "Customized Packages",
        dropdown: false
      }
    ]
  },
  {
    id: 4,
    href: "/pages",
    text: "Pages",
    dropdown: true,
    dropdownLinks: [
      {
        id: 1,
        href: "/privacyPolicy",
        text: "Privacy Policy",
        dropdown: false,
      },
      {
        id: 2,
        href: "/aboutCompany",
        text: "About Company",
        dropdown: false,
      },
      {
        id: 3,
        href: "/paymentGateway",
        text: "Payment Gateway",
        dropdown: false,
      },
      {
        id: 4,
        href: "/termsConditions",
        text: "Terms & Conditions",
        dropdown: false,
      }
    ]
  },
  {
    id: 5,
    href: "/testimonials",
    text: "Testimonials",
    dropdown: false

  },
];

const heroBenefits: HeroBenefit[] = [
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

const steps: Step[] = [
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

const services: Service[] = [
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

// const blogs: BlogPost[] = [
//   {
//     id: 1,
//     img: "src/assets/blogPosts/aroundTheGlobe.webp",
//     alt: "Arial shot of a tropical beach",
//     date: "Nov 11th, 2024",
//     heading: "Stories from Around the Globe",
//     description: "From the bustling streets of Tokyo to the serene landscapes of  Patagonia, each story offers a glimpse into the diverse cultures,  breathtaking landscapes, and unforget table encounters.",
//   },
//   {
//     id: 2,
//     img: "src/assets/blogPosts/hiddenGems.webp",
//     alt: "bungalows in the Maldives",
//     date: "Dec 25th, 2024",
//     heading: "Exploring Hidden Gems",
//     description: "Dive into our latest blog post as we uncover the enchanting allure of  off the beaten path destinations. From secluded beaches to quaint  villages, we guide you on a journey to discover the hidden gems waiting  to be explored.",
//   },
// ];

// const locations: ILocation[] = [
//   {
//     id: 1,
//     img: "src/assets/exploreMore/kudahuvadhoo.webp",
//     alt: "An image of kudahuvadhoo in Central Province, Maldives",
//     rating: 4.6,
//     heading: "Kudahuvadhoo",
//     location: "Central Province, Maldives",
//     price: 127
//   },
//   {
//     id: 2,
//     img: "src/assets/exploreMore/greatBarrierReef.webp",
//     alt: "An image of Great Barrier Reef in Queensland, Australia",
//     rating: 4.2,
//     heading: "Great Barrier Reef",
//     location: "Queensland, Australia",
//     price: 149
//   },
//   {
//     id: 3,
//     img: "src/assets/exploreMore/sonevaSecret.webp",
//     alt: "An image of Soneva Secret in Makunudhoo, Maldives",
//     rating: 4.5,
//     heading: "Soneva Secret",
//     location: "Makunudhoo, Maldives",
//     price: 152
//   },
//   {
//     id: 4,
//     img: "src/assets/exploreMore/navagioBay.webp",
//     alt: "An image of Navagio Bay in Zakynthos, Greece",
//     rating: 4.5,
//     heading: "Navagio Bay",
//     location: "Zakynthos, Greece",
//     price: 152
//   },
//   {
//     id: 5,
//     img: "src/assets/exploreMore/grandAnse.webp",
//     alt: "An image of Grand Anse in Grenada, Caribbean",
//     rating: 4.1,
//     heading: "Grand Anse",
//     location: "Grenada, Caribbean",
//     price: 102
//   },
//   {
//     id: 6,
//     img: "src/assets/exploreMore/zakynthos.webp",
//     alt: "An image of Zakynthos in Keri, Greece",
//     rating: 4.4,
//     heading: "Zakynthos",
//     location: "Keri, Greece",
//     price: 191
//   },
//   {
//     id: 7,
//     img: "src/assets/exploreMore/sonevaJani.webp",
//     alt: "An image of Soneva Jani in Noonu Atoll, Maldives",
//     rating: 4.9,
//     heading: "Soneva Jani",
//     location: "Noonu Atoll, Maldives",
//     price: 340
//   },
//   {
//     id: 8,
//     img: "src/assets/exploreMore/fourSeasons.webp",
//     alt: "An image of Four Seasons in Motu Tehotu, Bora Bora",
//     rating: 4.3,
//     heading: "Four Seasons",
//     location: "Motu Tehotu, Bora Bora",
//     price: 235
//   },
//   {
//     id: 9,
//     img: "src/assets/exploreMore/nusaPenida.webp",
//     alt: "An image of Nusa Penida in Bali, Indonesia",
//     rating: 4.2,
//     heading: "Nusa Penida",
//     location: "Bali, Indonesia",
//     price: 191
//   },
// ];

const testimonials: Testimonial[] = [
  {
    id: 1,
    img: "src/assets/headshots/linh.webp",
    alt: "Headshot of a customer named Linh Chuong",
    name: "Linh Chuong",
    description: "Our experience with GoTravel has been nothing short of exceptional. We were able to find & book our annual vacation to Thailand in under an hour! ",
    vacation: "Trip to Thialand"
  },
  {
    id: 2,
    name: "Alex Johnson",
    alt: "Headshot of a customer named Alex Johnson",
    img: "src/assets/headshots/alex.webp",
    description: "I booked a 2 week vacation to the Maldives for me and my fiance with GoTravel. Very fair price and stunning resort. Felt amazing to unwind and get away!",
    vacation: "Maldives Getaway"
  }
];

const footerCols: FooterCol[] = [
  {
    id: 1,
    heading: "Menu",
    links: [
      {id: 1, href: "#", name: "Blog"},
      {id: 2, href: "#", name: "Explore"},
      {id: 3, href: "#", name: "VIP Program"},
      {id: 4, href: "#", name: "Testimonials"},
    ]
  },
  {
    id: 2,
    heading: "Services",
    links: [
      {id: 1, href: "#", name: "Culinary"},
      {id: 2, href: "#", name: "Location"},
      {id: 3, href: "#", name: "Destination"},
      {id: 4, href: "#", name: "Customizes"},
    ]
  },
  {
    id: 3,
    heading: "Extra",
    links: [
      {id: 1, href: "#", name: "Privacy Policy"},
      {id: 2, href: "#", name: "About Company"},
      {id: 3, href: "#", name: "Payment Gateway"},
      {id: 4, href: "#", name: "Terms & Conditions"},
    ]
  },
  {
    id: 4,
    heading: "Contact Information",
    links: [
      {id: 1, href: "#", Icon: Phone, name: "1 248 416 6573"},
      {id: 2, href: "#", Icon: Email, name: "gotravel@gmail.com"},
      {id: 3, href: "#", Icon: Location, name: "25 East 29th Street, NY"},
    ]
  },
];

const footerSocials: FooterSocials[] = [
  {
    id: 1,
    alt: "LinkedIn",
    href: "https://www.linkedin.com",
    Icon: Linkedin
  },
  {
    id: 2,
    alt: "Instagram",
    href: "https://www.instagram.com",
    Icon: Instagram
  },
  {
    id: 3,
    alt: "WhatsApp",
    href: "https://www.whatsapp.com",
    Icon: WhatsApp
  },
]

export { 
  navigationLinks, 
  heroBenefits,
  steps,
  services,
  testimonials,
  footerSocials,
  footerCols
};
