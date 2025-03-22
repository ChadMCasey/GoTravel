import { useQuery } from "@tanstack/react-query";
import { getBlogPosts } from "../../api/api";
import BlogPost from "./BlogPost";

export default function News() {
  const {
    data: blogPosts,
    error,
    isLoading,
  } = useQuery({ queryKey: ["blogPosts"], queryFn: getBlogPosts });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Oh No! Error: {error.message}</div>;
  }

  return (
    <section className="px-24 py-36">
      <div className="m-auto max-w-389">
        <h2 className="tracking-6 mb-34 text-center text-[3.25rem] font-semibold">
          Latest news from us
        </h2>
        <ul className="flex flex-col gap-y-34">
          {blogPosts?.map((card) => <BlogPost card={card} key={card.id} />)}
        </ul>
      </div>
    </section>
  );
}
