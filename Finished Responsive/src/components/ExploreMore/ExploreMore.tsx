import { useQuery } from "@tanstack/react-query";
import { getLocations } from "../../api/api";
import LocationCard from "./LocationCard";
import CaretUp from "../icons/CaretUp";
import { useState } from "react";

export default function ExploreMore() {
  const [currIndex, setCurrIndex] = useState<number>(0);

  const { data, error, isLoading } = useQuery({
    queryKey: ["locations"],
    queryFn: getLocations,
  });

  const totalLocations = data?.length || 0;
  const itemsToShow = 6;
  const renderedLocations = data
    ? [
        ...data.slice(currIndex, currIndex + itemsToShow),
        ...data.slice(0, Math.max(0, currIndex + itemsToShow - totalLocations)),
      ]
    : [];

  const handleRightClick = () =>
    setCurrIndex((prev) => (prev + 1) % totalLocations);
  const handleLeftClick = () =>
    setCurrIndex((prev) => (prev - 1 + totalLocations) % totalLocations);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Oh No! Error: {error.message}</div>;
  }

  return (
    <section className="px-24 py-36">
      <div className="m-auto max-w-389">
        <div className="flex items-end justify-between gap-y-33">
          <div>
            <h2 className="tracking-6 mb-4 text-[3.25rem] font-semibold">
              Explore more
            </h2>
            <p className="tracking-6 text-grey-700 text-[1.75rem] font-light">
              Let’s go on adventure
            </p>
          </div>
          <div className="mb-2 flex gap-x-6">
            <button
              className="bg-grey-300 hover:bg-grey-400 flex h-18 w-18 cursor-pointer place-content-center rounded-full transition-all duration-200"
              onClick={handleLeftClick}
            >
              <CaretUp className="w-6 -rotate-90 fill-white" />
            </button>
            <button
              className="bg-primary-700 hover:bg-primary-800 flex h-18 w-18 cursor-pointer place-content-center rounded-full transition-all duration-200"
              onClick={handleRightClick}
            >
              <CaretUp className="w-6 rotate-90 fill-white" />
            </button>
          </div>
        </div>
        <ul className="mt-33 grid grid-cols-[repeat(auto-fit,_minmax(441px,_1fr))] gap-x-29 gap-y-24">
          {renderedLocations?.map((location) => (
            <LocationCard location={location} key={location.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
