import React from "react";
import SectionTitle from "./SectionTitle";
import Post from "./Post";
import FeaturedCard from "./FeatureCard";
import CategoryCard from "./CategoryCard";
import Tag from "./Tag";

const cards = [
  {
    id: 2,
    category: "Health",
    title: "Mindfulness Practices",
    date: "June 2, 2023",
    description:
      "Discover effective mindfulness techniques to reduce stress and improve mental wellbeing in your daily life.",
    color: "bg-green-100",
    photo:
      "https://images.unsplash.com/photo-1560447992-466be70a0c49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwYmFuZ2xhZGVzaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    category: "Business",
    title: "Remote Work Revolution",
    date: "July 18, 2023",
    description:
      "How hybrid work models are reshaping corporate culture and productivity in post-pandemic economies.",
    color: "bg-purple-100",
    photo:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    category: "Education",
    title: "Digital Learning Era",
    date: "August 5, 2023",
    description:
      "The transformation of education through online platforms and interactive learning technologies.",
    color: "bg-yellow-100",
    photo:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    category: "Sustainability",
    title: "Green Urban Futures",
    date: "September 22, 2023",
    description:
      "Innovative solutions for creating sustainable, eco-friendly cities of tomorrow.",
    color: "bg-teal-100",
    photo:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

export default function AllPost() {
  return (
    <section className="flex flex-col gap-[40] px-[10%]">
      <SectionTitle title={"All Post "} />
      <div className=" gap-4 flex flex-col md:flex-row">
        <div className="allpost-left w-full md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((item) => (
            <div key={item.id}>
            <FeaturedCard
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
        <div className="allpost-right w-full md:w-[30%]">
            <h2 className="font-pt_serif font-bold text-[20] mb-2">Featured Category</h2>
            <div className="flex flex-col gap-[8px] mb-4">
<CategoryCard title={'Travel'} />
<CategoryCard title={'Food'} />
<CategoryCard title={'LifeStyle'} />
            </div>
            <h2 className="font-pt_serif font-bold text-[20] mb-4">All Tags </h2>
            <div className="flex flex-wrap w-full gap-4">
                <Tag title={'Journey'} />
                <Tag title={'Life'} />
                <Tag title={'Food'} />
                <Tag title={'Fashion'} />
                <Tag title={'UI'} />
                <Tag title={'Interior'} />
                <Tag title={'Minimalistic'} />
                <Tag title={'Design'} />

            </div>
        </div>
      </div>
    </section>
  );
}
