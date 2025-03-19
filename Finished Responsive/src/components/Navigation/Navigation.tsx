import { useState } from "react";
import { INavigationLink } from "../../utils/contentTypes";
import { navigationLinks as navLinks } from "../../utils/content";

import LogoIcon from "../icons/LogoIcon";
import SearchIcon from "../icons/SearchIcon";
import CaretUp from "../icons/CaretUp";
import BellIcon from "../icons/BellIcon";

export default function Navigation() {
  const [selectedLinkId, setSelectedLinkId] = useState<number>(1);

  const activeLink: INavigationLink | undefined = navLinks.find(
    (link) => link.id === selectedLinkId,
  );

  return (
    <nav className="max-w-432 m-auto mb-12">
      <div className="px-21.5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-x-2.5">
          <LogoIcon />
          <span className="text-3xl font-semibold">GoTravel</span>
        </a>
        <ul className="flex items-center gap-x-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`gap-x-1.75 group flex cursor-pointer items-center font-medium transition-all duration-200 hover:text-black ${
                link.id === activeLink?.id ? "text-black" : "text-grey-600"
              }`}
              onClick={() => setSelectedLinkId(link.id)}
            >
              <a>{link.text}</a>
              {link.dropdown && (
                <span className="flex h-6 w-6 items-center justify-center">
                  <CaretUp
                    className={`group-hover:rotate-360 h-3.5 w-3.5 rotate-180 transition-all duration-200 ${
                      link.id === activeLink?.id
                        ? "fill-black"
                        : "fill-grey-600"
                    }`}
                  />
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-5">
          <BellIcon className="fill-grey-600 cursor-pointer" />
          <SearchIcon className="fill-grey-600 cursor-pointer" />
          <button className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[10px] px-8 py-3.5 font-medium text-white transition-all duration-200">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
}
