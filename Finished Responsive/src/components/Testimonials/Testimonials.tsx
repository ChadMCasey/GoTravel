import { testimonials } from "../../utils/content";

export default function Testimonials() {
  return (
    <section className="px-24 py-36">
      <div className="m-auto max-w-389">
        <h2 className="mb-22 text-center text-[3.875rem] font-semibold">
          What Our Vacationers Says
        </h2>
        <ul className="flex gap-x-20">
          {testimonials.map((testimonial) => (
            <li
              className="relative ml-24 flex rounded-3xl bg-white py-14 pr-12 pl-42 drop-shadow-[0_0px_20px_rgba(0,0,0,0.05)]"
              key={testimonial.id}
            >
              <div className="after:bg-primary-700 absolute left-0 h-47.5 w-47.5 -translate-x-[50%] transform overflow-hidden after:absolute after:right-0 after:bottom-0 after:-z-1 after:block after:h-45 after:w-45 after:rounded-full">
                <img
                  className="bg-grey-300 top-0 left-0 z-5 h-45 w-45 rounded-full"
                  src={testimonial.img}
                  alt={testimonial.alt}
                />
              </div>
              <div className="flex flex-col justify-between gap-y-14">
                <p className="text-base/9 font-light">
                  {testimonial.description}
                </p>
                <p>
                  {testimonial.name} / <span>{testimonial.vacation}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
