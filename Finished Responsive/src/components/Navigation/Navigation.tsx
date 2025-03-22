import { navigationLinks } from "../../utils/content";

import LogoIcon from "../icons/LogoIcon";
import SearchIcon from "../icons/SearchIcon";
import CaretUp from "../icons/CaretUp";
import BellIcon from "../icons/BellIcon";
import DesktopDropdown from "./DesktopDropdown";

export default function Navigation() {
  return (
    <nav className="m-auto mb-12 max-w-432">
      <div className="flex justify-between px-21.5">
        <a href="/" className="flex items-center gap-x-2.5">
          <LogoIcon />
          <span className="text-3xl font-semibold">GoTravel</span>
        </a>
        <ul className="flex items-stretch gap-x-10">
          {navigationLinks.map((link) => (
            <li
              key={link.id}
              className="group relative flex cursor-pointer items-center gap-x-1.75 font-medium transition-all duration-200"
            >
              <a className="text-grey-600 group-hover:text-black">
                {link.text}
              </a>
              {link.dropdown && (
                <span className="flex h-6 w-6 items-center justify-center">
                  <CaretUp className="fill-grey-600 h-3.5 w-3.5 rotate-180 transition-all duration-250 group-hover:rotate-360 group-hover:fill-black" />
                </span>
              )}
              {link.dropdown && <DesktopDropdown links={link.dropdownLinks} />}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-5">
          <BellIcon className="fill-grey-600 cursor-pointer hover:fill-black" />
          <SearchIcon className="fill-grey-600 cursor-pointer hover:fill-black" />
          <button className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[10px] px-8 py-3.5 font-medium text-white transition-all duration-200">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
}
