import { type BlogPost } from "../../utils/contentTypes";

export default function BlogPost({ card }: { card: BlogPost }) {
  return (
    <li
      key={card.id}
      className="group flex items-center justify-between gap-x-24"
    >
      <div className="overflow-hidden rounded-[1.375rem]">
        <img
          src={card.img}
          alt={card.alt}
          className="max-h-108 transform transition-all duration-300 ease-in-out group-hover:scale-103"
        />
      </div>
      <div className="mr-11 max-w-195">
        <p className="tracking-6 text-grey-900 mb-4.5 text-[1.25rem] font-medium">
          {card.date}
        </p>
        <h4 className="tracking-6 mb-6 text-[2.75rem] font-medium">
          {card.title}
        </h4>
        <p className="text-grey-800 mb-6 text-lg/13.5">{card.summary}</p>
        <button className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[.625rem] px-8 py-3.5 text-lg font-medium text-white transition-all duration-200">
          View More
        </button>
      </div>
    </li>
  );
}
