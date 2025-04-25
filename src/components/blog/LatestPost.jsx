import React from 'react';
import SectionTitle from './SectionTitle';
import Post from './Post';

const cards= [
  {
    id: 1,
    category: "Technology",
    title: "The Future of AI",
    date: "May 15, 2023",
    description: "Exploring how artificial intelligence will transform industries in the next decade with groundbreaking innovations.",
    color: "bg-blue-100",
    photo: "https://plus.unsplash.com/premium_photo-1729708654992-28f9185f82b3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    category: "Health",
    title: "Mindfulness Practices",
    date: "June 2, 2023",
    description: "Discover effective mindfulness techniques to reduce stress and improve mental wellbeing in your daily life.",
    color: "bg-green-100",
    photo: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    category: "Business",
    title: "Remote Work Revolution",
    date: "July 18, 2023",
    description: "How hybrid work models are reshaping corporate culture and productivity in post-pandemic economies.",
    color: "bg-purple-100",
    photo: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    category: "Education",
    title: "Digital Learning Era",
    date: "August 5, 2023",
    description: "The transformation of education through online platforms and interactive learning technologies.",
    color: "bg-yellow-100",
    photo: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    category: "Sustainability",
    title: "Green Urban Futures",
    date: "September 22, 2023",
    description: "Innovative solutions for creating sustainable, eco-friendly cities of tomorrow.",
    color: "bg-teal-100",
    photo: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

export default function LatestPost() {
  return (
   <section className='px-[10%] flex flex-col gap-[40] bg-off-white py-8'>
           <SectionTitle title={'Latest Post'} />
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2'>
       {cards.map((item)=>(
           <Post 
           photo={item.photo}
           category={item.category}
           title={item.title}
           description={item.description}
           date={item.date}
           time={item.time}
           
           key={item.id} />
       ))}
   </div>
           
         
       </section>
  )
}
