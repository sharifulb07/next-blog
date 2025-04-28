import Footer from '@/components/blog/Footer'
import React from "react";
import SectionTitle from "@/components/blog/SectionTitle";

import Post from '@/components/blog/Post';
import Image from 'next/image';


const cards = [
  {
    id: 1,
    category: "Technology",
    title: "The Future of AI",
    date: "May 15, 2023",
    time: "4 min ago",
    description:
      "Exploring how artificial intelligence will transform industries in the next decade with groundbreaking innovations.",
    color: "bg-blue-100",
  },
  {
    id: 2,
    category: "Health",
    title: "Mindfulness Practices",
    date: "June 2, 2023",
    time: "45 min ago",
    description:
      "Discover effective mindfulness techniques to reduce stress and improve mental wellbeing in your daily life.",
    color: "bg-green-100",
  },
  {
    id: 3,
    category: "Business",
    title: "Remote Work Trends",
    date: "July 18, 2023",
    time: "40 min ago",
    description:
      "How hybrid work models are reshaping corporate culture and productivity in post-pandemic economies.",
    color: "bg-purple-100",
  },
  {
    id: 4,
    category: "Education",
    title: "E-Learning Revolution",
    date: "August 5, 2023",
    time: "4 hours ago",
    description:
      "The rise of online education platforms and their impact on traditional learning institutions worldwide.",
    color: "bg-yellow-100",
  },
  {
    id: 5,
    category: "Environment",
    title: "Sustainable Cities",
    date: "September 22, 2023",
    time: "1 day ago",
    description:
      "Innovative urban planning strategies creating greener, more livable cities for future generations.",
    color: "bg-teal-100",
  },
];


export default function LifeStyle() {
  return (
    <div>


      <section className="px-[10%] flex flex-col gap-[40] mb-10">


        <Image src={"https://images.unsplash.com/photo-1521085799529-892b9b08687b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={800} height={400} alt='walpaper' className='w-full h-[400px]' />
            <SectionTitle title={"LifeStyle Post"} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
              {cards.map((item) => (
                <Post
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  time={item.time}
                  key={item.id}
                />
              ))}
            </div>
          </section>
      <Footer />
    </div>
  )
}
