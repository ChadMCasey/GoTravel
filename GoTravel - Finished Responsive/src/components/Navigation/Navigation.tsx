import { navigationLinks } from "../../utils/content";

import LogoIcon from "../icons/LogoIcon";
import SearchIcon from "../icons/SearchIcon";
import CaretUp from "../icons/CaretUp";
import BellIcon from "../icons/BellIcon";

export default function Navigation() {
  return (
    <nav className="max-w-432 px-24 m-auto">
      <div className="px-21.5 flex justify-between">
        <a href="/" className="flex items-center">
          <LogoIcon />
          <span>GoTravel</span>
        </a>
        <ul className="flex items-center">
          {navigationLinks.map((link) => (
            <li key={link.id} className="flex gap-x-2 items-center">
              <p>{link.text}</p>
              <span>
                {link.dropdown && (
                  <CaretUp
                    className="w-4 h-4 rotate-180"
                    fill="var(--color-grey-600)"
                  />
                )}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <BellIcon />
          <SearchIcon />
          <button>Join Now</button>
        </div>
      </div>
    </nav>
  );
}
