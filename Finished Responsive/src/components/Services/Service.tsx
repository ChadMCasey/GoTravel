import { type Service } from "../../utils/contentTypes";

interface ServiceProps {
  service: Service;
}

export default function Service({ service }: ServiceProps) {
  return (
    <li
      key={service.id}
      className="max-w-90 h-90 group flex flex-col justify-between"
    >
      <service.Icon className="h-26 group-first-of-type:h-30 place-self-center" />
      <div className="text-center">
        <h3 className="text-[1.75rem]/10.5 tracking-6 mb-9.5 text-nowrap font-semibold">
          {service.heading}
        </h3>
        <p className="text-base/9.5 text-grey-900/85 tracking-6">
          {service.description}
        </p>
      </div>
    </li>
  );
}
