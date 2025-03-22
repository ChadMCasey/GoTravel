import { type HeroBenefit } from "../../utils/contentTypes";

interface HeroBenefitProps {
  benefit: HeroBenefit;
}

export default function HeroBenefit({ benefit }: HeroBenefitProps) {
  return (
    <li key={benefit.id} className="flex gap-x-12">
      <div className="bg-primary-100 flex h-24 w-24 shrink-0 items-center justify-center rounded-full">
        <benefit.Icon className="fill-primary-700" />
      </div>
      <div className="flex flex-col gap-y-2.5">
        <h5 className="text-grey-600 tracking-6 text-[1.75rem]/10.5 font-medium whitespace-nowrap">
          {benefit.heading}
        </h5>
        <p className="tracking-6 text-grey-600 text-base/7.5">
          {benefit.description}
        </p>
      </div>
    </li>
  );
}
