import { useState } from "react";

import { ILocation } from "../../utils/contentTypes";
import { locations } from "../../utils/content";
import LocationCard from "./LocationCard";
import CaretUp from "../icons/CaretUp";

export default function ExploreMore() {
  const [locationCards, setLocationCards] = useState<ILocation[]>(locations);
  const [startIndex, setStartIndex] = useState<number>(0);

  const renderedCards = locationCards.slice(startIndex, startIndex + 6);

  return (
    <section className="px-24 py-36">
      <div className="max-w-389 m-auto">
        <div className="gap-y-33 flex items-end justify-between">
          <div>
            <h2 className="tracking-6 mb-4 text-[3.25rem] font-semibold">
              Explore more
            </h2>
            <p className="tracking-6 text-grey-700 text-[1.75rem] font-light">
              Let’s go on adventure
            </p>
          </div>
          <div className="mb-2 flex gap-x-6">
            <button className="w-18 h-18 bg-grey-300 flex cursor-pointer place-content-center rounded-full">
              <CaretUp className="w-6 -rotate-90 fill-white" />
            </button>
            <button className="w-18 h-18 bg-primary-700 flex cursor-pointer place-content-center rounded-full">
              <CaretUp className="w-6 rotate-90 fill-white" />
            </button>
          </div>
        </div>
        <ul className="gap-x-29 mt-33 grid grid-cols-[repeat(auto-fit,_minmax(441px,_1fr))] gap-y-24">
          {renderedCards.map((location) => (
            <LocationCard location={location} key={location.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
