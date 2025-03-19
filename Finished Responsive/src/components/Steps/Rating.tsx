import Star from "../icons/Star";

interface StepsProps {
  key: number;
  name: string;
  rating: number;
  img: string;
  className: string;
}

export default function Rating(props: StepsProps) {
  return (
    <div
      className={`absolute pl-3 pr-5 py-3.5 rounded-xl bg-white/85 flex gap-x-2.5 drop-shadow-[0_4px_30px_rgba(0,0,0,0.12)] backdrop-blur-3xl ${props.className}`}
    >
      <div className="w-17 h-17 rounded-full overflow-hidden bg-grey-300  flex justify-center items-end">
        <img
          src={props.img}
          alt="Graphic of person rating photo"
          className="w-15 h-15"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="font-semibold tracking-6 ">{props.name}</p>
        <div className="flex items-center">
          <Star className="w-6 h-6 fill-yellow mr-2 " />
          <p className="text-grey-600 font-semibold text-[1.0625rem]">
            {props.rating}
          </p>
        </div>
      </div>
    </div>
  );
}
