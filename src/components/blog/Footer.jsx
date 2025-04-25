import Image from "next/image";
import logo from "@/../public/logo.svg";
import Link from "next/link";
import SubscribeBtn from "./SubscribeBtn";

const category = [
  {
    id: 1,
    title: "Travel",
  },
  {
    id: 2,
    title: "Food",
  },
  {
    id: 3,
    title: "Fashion",
  },
  {
    id: 4,
    title: "LifeStyle",
  },
];

const socialLinks = [
  {
    id: 1,
    title: "Facebook",
    href: "https://facebook.com",
  },
  {
    id: 2,
    title: "Twitter",
    href: "https://twitter.com",
  },
  {
    id: 3,
    title: "Instagram",
    href: "https://instagram.com",
  },
  {
    id: 4,
    title: "Youtube",
    href: "https://youtube.com",
  },
];

export default function Footer() {
  return (
    <section className="bg-footerbg w-full px-[10%]  py-20 flex flex-col md:flex-row  gap-[50px] md:gap-[70px] lg:gap-[112px] ">
      <div className="sec1 flex flex-col gap-4 w-full">
        <Image src={logo} alt="logo" />
        <p className="text-off-white">
          Phasellus porttitor sapien a purus venenatis condimentum. Nunc lectus
          ipsum, laoreet ut efficitur.
        </p>
      </div>
      <div className="sec2 flex-col w-full">
        <h1 className="text-white text-[24px] font-normal mb-6">Category</h1>
        <div className="flex flex-col gap-[10px]">
          {category.map((title) => (
            <h2
              key={title.id}
              className="text-white/60 font-normal text-[16px] font-poppins cursor-pointer"
            >
              {title.title}{" "}
            </h2>
          ))}
        </div>
      </div>
      <div className="sec3 flex flex-col w-full">
        <h1 className="text-white text-[24px] font-normal mb-6 flex">Follow Us </h1>
        <div className="flex flex-col gap-[10px]">
          {socialLinks.map((title) => (
            <Link href={title.href}  key={title.id} >
              <h2
               
                className="text-white/60 font-normal text-[16px] font-poppins cursor-pointer"
              >
                {title.title}{" "}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="sec4 flex-col w-full">
      <h1 className="text-white text-[24px] font-normal mb-6 flex w-full">Newsletter </h1>
          <div className="flex md:flex-col lg:flex-row w-full gap-4">
            <form action="">
              <input
              text='email'
              id='email'
              placeholder="Enter Email"
              className="p-4 bg-white/6"
             
              />
            </form>
            <SubscribeBtn title={'Subscribe'} />
          </div>
      </div>
    </section>
  );
}
