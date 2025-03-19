import swimmingDudes from "../../assets/swimmingDudes.webp";
import { steps } from "../../utils/content";
import Rating from "./Rating";

export default function Steps() {
  return (
    <section className="px-24 py-36">
      <div className="max-w-432 px-21.5 m-auto">
        <div className="mt-4 text-center">
          <h2 className="tracking-6 mb-5 text-[3.25rem] font-semibold">
            Travel to make sweet memories
          </h2>
          <p className="text-[1.75rem]/10.5 tracking-6 text-grey-700 font-light">
            Find the trips that flexible lifestyle
          </p>
        </div>

        <div className="pt-26 flex justify-between">
          <ul className="flex max-w-min flex-col gap-y-14">
            {steps.map((step) => (
              <li key={step.id} className="gap-y-4.5 flex flex-col">
                <p className="px-5.5 bg-primary-700 w-min rounded-[.5rem] py-0.5 text-[1.375rem]/8 font-semibold text-white">
                  {step.id}
                </p>
                <h3 className="text-[1.75rem]/10.5 tracking-6 w-max text-nowrap font-semibold">
                  {step.heading}
                </h3>
                <p className="text-grey-900 tracking-6 text-base/8 font-light">
                  {step.description}
                </p>
              </li>
            ))}
            <button className="bg-primary-700 hover:bg-primary-800 w-max cursor-pointer rounded-[.625rem] px-8 py-3.5 text-lg font-medium text-white transition-all duration-200">
              Start your explore
            </button>
          </ul>

          <figure className="relative px-20">
            <img
              src={swimmingDudes}
              alt="A photo of two men swimming"
              className="max-h-[50.8rem] rounded-[3.25rem]"
            />
            <Rating
              key={1}
              name="Tiffany Miller"
              rating={4.6}
              img="./src/assets/headshots/tiffany.webp"
              className="absolute left-0 top-28"
            />
            <Rating
              key={2}
              name="Amari Reece"
              rating={4.9}
              img="./src/assets/headshots/amari.webp"
              className="absolute bottom-28 right-0"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
