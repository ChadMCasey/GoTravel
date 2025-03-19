import { blogs } from "../../utils/content";
import BlogCard from "./BlogCard";

export default function News() {
  return (
    <section className="px-24 py-36">
      <div className="max-w-389 m-auto">
        <h2 className="tracking-6 mb-34 text-center text-[3.25rem] font-semibold">
          Latest news from us
        </h2>
        <ul className="gap-y-34 flex flex-col">
          {blogs.map((card) => (
            <BlogCard card={card} key={card.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
