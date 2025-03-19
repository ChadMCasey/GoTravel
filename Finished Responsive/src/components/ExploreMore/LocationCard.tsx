import { ILocation } from "../../utils/contentTypes";
import LocationIcon from "../icons/Location";
import Star from "../icons/Star";

interface LocationCardProps {
  location: ILocation;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <li>
      <div className="relative mb-8">
        <img className="rounded-3xl" src={location.img} alt={location.alt} />
        <div className="absolute right-6 top-5 flex items-center gap-x-2 rounded-[.625rem] bg-white/85 px-3 py-1.5 backdrop-blur-3xl">
          <Star className="fill-yellow h-6 w-6" />
          <p className="text-grey-600 tracking-6 text-[1.0625rem] font-semibold">
            {location.rating}
          </p>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="mb-3.5 text-[1.75rem] font-semibold">
            {location.heading}
          </p>
          <div className="flex items-center">
            <LocationIcon className="mr-1.5 h-6 w-6" />
            <p className="text-grey-700 text-lg">{location.location}</p>
          </div>
        </div>
        <p className="font-rubik text-[1.75rem]">
          ${location.price}/<span className="text-[1.25rem]">Pax</span>
        </p>
      </div>
    </li>
  );
}
