import Image from "next/image";
import left from "@/../public/left.jpg";
import right from "@/../public/right.jpg";
import CardCarousel from "./CardCarousel";

export default function Hero() {
  return (
    <section className="flex bg-amber-400 flex-col md:flex-row">
      <div className="left w-full md:w-[40%] bg-blue-500 relative">
        <Image src={left} alt="hero-left" className="h-[100%] w-[100%]" />
        <div className="absolute left-5 top-30 md:left-50 z-50">
          <CardCarousel />
        </div>
      </div>
      <div className="right w-full md:w-[60%] bg-orange-500">
        <Image src={right} alt="hero-right" className="h-[100%]  w-[100%]" />
      </div>

    </section>
  );
}
