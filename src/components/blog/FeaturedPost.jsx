import SectionTitle from "./SectionTitle"
import FeaturedCard from "./FeatureCard"

export default function FeaturedPost() {
  return (
    <section className="px-[10%] flex flex-col gap-[40] ">
        <SectionTitle title={'Featured Post'} />
        <FeaturedCard />
      
    </section>
  )
}
