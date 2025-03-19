import { type IHeroBenefit } from "../../utils/contentTypes";

interface HeroBenefitProps {
  benefit: IHeroBenefit;
}

export default function HeroBenefit({ benefit }: HeroBenefitProps) {
  return (
    <li key={benefit.id} className="flex gap-x-12 ">
      <div className="w-24 h-24 rounded-full bg-primary-100 shrink-0 flex justify-center items-center">
        <benefit.Icon className="fill-primary-700" />
      </div>
      <div className="flex flex-col gap-y-2.5">
        <h5 className="text-[1.75rem]/10.5 text-grey-600 font-medium tracking-6 whitespace-nowrap">
          {benefit.heading}
        </h5>
        <p className="tracking-6 text-grey-600 text-base/7.5">
          {benefit.description}
        </p>
      </div>
    </li>
  );
}
