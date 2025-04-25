import {cards} from "@/lib/navlinksinfo";
import FeaturedCard from "./FeatureCard";

export default function SearchCardSec() {
  return (
    <section className="px-[10%] grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-4">
      {cards.map((item) => (
        <FeaturedCard
        key={item.id}
          photo={item.photo}
          category={item.category}
          title={item.title}
          description={item.description}
          date={item.date}
          time={item.time}
        />
      ))}
    </section>
  );
}
