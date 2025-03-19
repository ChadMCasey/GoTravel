import { services } from "../../utils/content";
import { type IService } from "../../utils/contentTypes";
import Service from "./Service";

const CustomizedPackages: IService = services.at(0) as IService;
const CulinaryTours: IService = services.at(1) as IService;
const DestinationExpertise: IService = services.at(2) as IService;

export default function Services() {
  return (
    <section className="bg-primary-100 px-24 py-36">
      <ul className="max-w-389 border-grey-500/40 border-y-1 m-auto flex justify-between py-24">
        <Service service={CustomizedPackages} />
        <div className="w-0.25 bg-grey-500/40 block self-stretch" />
        <Service service={CulinaryTours} />
        <div className="w-0.25 bg-grey-500/40 block self-stretch" />
        <Service service={DestinationExpertise} />
      </ul>
    </section>
  );
}
