import SectionTitle from "./SectionTitle";
import FeaturedCard from "./FeatureCard";

const cards = [
  {
    id: 1,
    category: "Technology",
    title: "The Future of AI",
    date: "May 15, 2023",
    description:
      "Exploring how artificial intelligence will transform industries in the next decade with groundbreaking innovations.",
    color: "bg-blue-100",
    photo:
      "https://plus.unsplash.com/premium_photo-1729708654992-28f9185f82b3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    category: "Health",
    title: "Mindfulness Practices",
    date: "June 2, 2023",
    description:
      "Discover effective mindfulness techniques to reduce stress and improve mental wellbeing in your daily life.",
    color: "bg-green-100",
    photo:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

export default function FeaturedPost() {
  return (
    <section className="px-[10%] flex flex-col gap-[40] ">
      <SectionTitle title={"Featured Post"} />
      <div className="flex gap-3 flex-col md:flex-row ">
      {cards.map((item) => (
        <div key={item.id}>
        <FeaturedCard
          id={item}
          photo={item.photo}
          category={item.category}
          title={item.title}
          description={item.description}
          date={item.date}
          time={item.time}
        />
        </div>
      ))}
      
      </div>
    </section>
  );
}
