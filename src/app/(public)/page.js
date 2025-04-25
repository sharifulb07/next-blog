
import AllPost from "@/components/blog/AllPost";
import FeaturedPost from "@/components/blog/FeaturedPost";
import Footer from "@/components/blog/Footer";
import Hero from "@/components/blog/Hero";
import LatestPost from "@/components/blog/LatestPost";
import RecentPost from "@/components/blog/RecentPost";


export default function Home() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Hero />
      <RecentPost />
      <LatestPost />
      <FeaturedPost />
      <AllPost />
      <Footer />
 

    </div>
  )
}
