import React from "react";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";

export default function Post({photo, category, title, date, time, description }) {
  return (
    <div className="border rounded-lg w-full h-full p-6  bg-white shadow-md cursor-pointer">
      {photo && (
        <Image
          src={photo}
          alt={"card photo"}
          width={300}
          height={50}
          className="w-[340px] h-[200px] md:w-[400px] min-w-full"
        />
      )}
      <h3 className="text-xl text-[16px]  flex items-center gap-2 font-normal font-poppins ">
        {" "}
        <div className="h-0.5 w-[32px] bg-amber-400 rounded-full"></div>{" "}
        {category}
      </h3>
      <h2 className="font-pt_serif  text-[24px] font-bold "> {title}</h2>
      <div className="flex items-center gap-3 mb-2">
        {" "}
        <p>{date}</p>{" "}
        <div className="w-[5px] h-[5px] bg-blue-500 rounded-full "></div>{" "}
        <p>{time}</p>
      </div>
      <p className="text-menu-color mb-1">{description}</p>
      <button className="px-2 py-1 cursor-pointer  text-menu-color font-medium flex items-center gap-2">
        Read More <MdArrowRightAlt size={24} />
      </button>
    </div>
  );
}
