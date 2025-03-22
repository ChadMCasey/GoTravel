import { motion } from "motion/react";
import Star from "../icons/Star";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface StepsProps {
  key: number;
  name: string;
  rating: number;
  img: string;
  className: string;
}

export default function Rating(props: StepsProps) {
  const [count, setCount] = useState<number>(0);

  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const step = 0.1; // 0 -> 4.9 stars by .1 increments
    const duration = 1000; // ms
    let incrementInterval = duration / (props.rating / step);

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + step >= props.rating) {
          incrementInterval += 1;
          return props.rating;
        }
        return prev + step;
      });
    }, incrementInterval);
    return () => clearInterval(interval);
  }, [props.rating, inView]);

  return (
    <motion.div
      className={`absolute flex gap-x-2.5 rounded-xl bg-white/85 py-3.5 pr-5 pl-3 drop-shadow-[0_4px_30px_rgba(0,0,0,0.12)] backdrop-blur-3xl ${props.className}`}
      ref={ref} // Attach the ref to the div
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-grey-300 flex h-17 w-17 items-end justify-center overflow-hidden rounded-full">
        <img
          src={props.img}
          alt="Graphic of person rating photo"
          className="h-15 w-15"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="tracking-6 font-semibold">{props.name}</p>
        <div className="flex items-center">
          <Star className="fill-yellow mr-2 h-6 w-6" />
          <p className="text-grey-600 text-[1.0625rem] font-semibold">
            {count.toFixed(1)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
