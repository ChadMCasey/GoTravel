import { type BlogCard } from "../../utils/contentTypes";

interface BlogCardProps {
  card: BlogCard;
}

export default function BlogCard({ card }: BlogCardProps) {
  return (
    <li key={card.id} className="flex justify-between items-center gap-x-24">
      <img
        src={card.img}
        alt={card.alt}
        className="max-h-108 rounded-[1.375rem]"
      />
      <div className="max-w-195 mr-11">
        <p className="text-[1.25rem] font-medium tracking-6 text-grey-900 mb-4.5">
          {card.date}
        </p>
        <h4 className="text-[2.75rem] tracking-6 font-medium mb-6">
          {card.heading}
        </h4>
        <p className="text-lg/13.5 text-grey-800 mb-6">{card.description}</p>
        <button className="text-lg text-white font-medium bg-primary-700 px-8 py-3.5 rounded-[.625rem] cursor-pointer hover:bg-primary-800 duration-200 transition-all">
          View More
        </button>
      </div>
    </li>
  );
}
