import Para from "@/components/blog/Para";
import SocialIcon from "@/components/blog/SocialIcon";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { LiaCommentsSolid } from "react-icons/lia";

// social icons
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { IoLinkOutline } from "react-icons/io5";
import SectionTitle from "@/components/blog/SectionTitle";
import Post from "@/components/blog/Post";
import Comment from "@/components/blog/Comment";
import TotalComment from "@/components/blog/TotalComment";

export default async function BlogDetailsPage({ params }) {
  const { blogId } = await params;
  const date = new Date();
  return (
    <div className="flex flex-col relative gap-20">
      <Image
        src={
          "https://images.unsplash.com/photo-1745594618508-6e3abfce30ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
        }
        alt="cover image"
        width={400}
        height={200}
        className="w-full h-[500px]"
      />

      <section className=" absolute left-1/2 top-[500px]  transform -translate-x-1/2 -translate-y-1/2   bg-white rounded-md p-10 shadow-lg z-10  h-[300px] w-[400px] md:w-[800px] gap-7 flex flex-col">
        <h3 className="text-xl text-[22px]  flex items-center gap-2 font-normal font-poppins ">
          {" "}
          <div className="h-0.5 w-[32px] bg-amber-400 rounded-full"></div>{" "}
          Interior
        </h3>
        <h2 className="font-pt_serif  text-[32px] font-bold ">
          {" "}
          20 essential skills for successful web designers
        </h2>
        <div className="flex  justify-between items-center gap-3 mb-2">
          <div className=" flex items-center gap-3">
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
              }
              alt="portfolio"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full border-2 border-menu-color"
            />{" "}
            <p>{date.toDateString()}</p>{" "}
            <div className="w-[5px] h-[5px] bg-blue-500 rounded-full "></div>{" "}
            <p>
              {date.getHours()}:{date.getMinutes()}: {date.getSeconds()}
            </p>
          </div>
          <div className=" flex gap-3">
            <SocialIcon img={<GrFacebookOption color="#272343" size={16} />} />
            <SocialIcon img={<FaTwitter color="#272343" size={16} />} />
            <SocialIcon img={<FaPinterestP color="#272343" size={16} />} />
            <SocialIcon img={<IoLinkOutline color="#272343" size={16} />} />
          </div>
        </div>
      </section>
<div className="mt-[120px]">


      <div className=" left-1/4 right-1/4   details justify-center items-center flex  gap-[50] md:gap-[100]">

        <div className="flex flex-col justify-start items-start gap-5 w-[400px] md:w-[800px] px-2">
          <div className="flex  gap-5">
            <div className="w-1/5 flex flex-col items-star gap-2">
              <div className="flex flex-row  items-center gap-1 w-full">
                <AiOutlineLike color="#FB743E" />
                <p>24 Likes </p>
              </div>
              <div className="flex items-center gap-1 w-full">
                <LiaCommentsSolid color="#FB743E" />
                <p>30 comments </p>
              </div>
            </div>
            <div className="w-4/5 flex flex-col gap-5">
              <Para
                title1={"20 web designer skills to have"}
                desc={
                  "Here's a medley of 20 skills to help you become a design expert, no matter where you're at in your career."
                }
              />

              <div className="pl-5 border-l-4 border-l-[#FB743E]">
                <Para title3={'Being a web designer involves harmoniously combining visuals and content. But non-technical skills, like collaboration and communication, are also important.'} />
              </div>
              <Para title2={'1. Know the principles of design'} />
              <Para img={'https://images.unsplash.com/photo-1745772352544-bd8f1d144497?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
              <Para desc={'You don’t need to know music theory to write a song, and if you’ve never taken an art class, you can still draw. Some of us might have an innate artistic ability, but knowing the basic fundamentals can make the difference between recreating what you see and being able to build a design that’s calculated and unique.'} />
              <Para desc={'“Essential visual design principles” does a deeper dive into the principles of visual design rooted in Gestalt psychology. These fundamentals are the foundation of web and graphic design and important to know. Whether you’re designing a portfolio or a print ad, these concepts can help guide your work. Let’s do a quick recap.'} />
              <Para title2={'Emergence'} />
              <Para desc={'Rather than focusing on individual parts, we tend to process visual stimuli as a whole. Emergence is seeing an arrangement of visuals and immediately understanding what they represent. When something breaks a pattern, we become aware of the pieces that make it up.'} />
              <Para title2={'Reification'} />
              <Para desc={'Reification is using only the essential parts of an object to make it identifiable. It lets you exercise restraint in a design, while still conveying meaning. '} />
              <Para title2={'Invariance'} />
              <Para desc={'Invariance is being able to use tasteful discordance in your designs, making something stand out from a group of similar objects. The use of invariance allows you to highlight parts of a design.'} />
              <Para title1={'2. Typography'} />
              <Para img={'https://images.unsplash.com/photo-1745794565783-913db01a89b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />

              <Para desc={'Typography shapes our perception of ideas. A type’s weight and geometry communicates meaning, and as a designer, it’s important to know the best way to deliver messaging with the appropriate typographical choices.'} />
              <Para desc={"All the font options can make it hard for new designers to know what to choose. Practical fonts like Georgia, Verdana, and Roboto work well for body copy, while more decorative typefaces should be used sparingly as ornamentation. Good designers know the difference between type styles and where to use them."} />
              <Para desc={"There are plenty of resources on the web to help broaden your typographic knowledge. FONTS IN USE shows different typefaces applied to a variety of media. Tools like Font combinations for web designers can give you ideas for possible pairings."} />

              <div className="flex items-center justify-center gap-4 p-4   ">
                <div className="px-[120px] py-4 bg-[#FB743E] flex items-center gap-1 ">
                  <AiOutlineLike size={16} color="white" />
                  <p className="text-white">
                    like

                  </p>
                </div>
                <p>Share the Post</p>
                <div className=" flex gap-3">
                  <SocialIcon img={<GrFacebookOption color="#272343" size={16} />} />
                  <SocialIcon img={<FaTwitter color="#272343" size={16} />} />
                  <SocialIcon img={<FaPinterestP color="#272343" size={16} />} />
                  <SocialIcon img={<IoLinkOutline color="#272343" size={16} />} />
                </div>

              </div>


            </div>
          </div>


        </div>
      </div>


      <div className="flex flex-col gap-6">

        <div className="flex items-center justify-between px-[10%]">

          <SectionTitle title={'You May Also Like'} />
          <p className="font-medium underline cursor-pointer ">View all </p>

        </div>

        <div className="flex gap-3 px-[10%]">
          <Post
            photo={'https://images.unsplash.com/photo-1745811248484-503df50eb622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8'}
            category={'Travel'}
            title={'How to Get Started With UI/UX in Figma'}
            date={'March 25, 2021'}
            time={'4 min read'}
          />
          <Post
            photo={'https://images.unsplash.com/photo-1745761412274-5303bc3f2e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D'}
            category={'Travel'}
            title={'How to Get Started With UI/UX in Figma'}
            date={'March 25, 2021'}
            time={'4 min read'}
          />

        </div>


      </div>

      <div className="px-[10%]">

        <Comment title={'Leave a Comment'} />
        <TotalComment />
        <Comment title={'Write a Replay'} />
      </div>

      </div>
    </div>
  );
}
