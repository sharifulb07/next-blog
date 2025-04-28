"use client";
import { useState, useEffect, useCallback } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoRotateInterval = 5000;
  const cards = [
    {
      id: 1,
      category: "Technology",
      title: "The Future of AI",
      date: "May 15, 2023",
      time:"4 min ago",
      description:
        "Exploring how artificial intelligence will transform industries in the next decade with groundbreaking innovations.",
      color: "bg-blue-100",
    },
    {
      id: 2,
      category: "Health",
      title: "Mindfulness Practices",
      date: "June 2, 2023",
      time:"45 min ago",
      description:
        "Discover effective mindfulness techniques to reduce stress and improve mental wellbeing in your daily life.",
      color: "bg-green-100",
    },
    {
      id: 3,
      category: "Business",
      title: "Remote Work Trends",
      date: "July 18, 2023",
      time:"40 min ago",
      description:
        "How hybrid work models are reshaping corporate culture and productivity in post-pandemic economies.",
      color: "bg-purple-100",
    },
    {
      id: 4,
      category: "Education",
      title: "E-Learning Revolution",
      date: "August 5, 2023",
      time:"4 hours ago",
      description:
        "The rise of online education platforms and their impact on traditional learning institutions worldwide.",
      color: "bg-yellow-100",
    },
    {
      id: 5,
      category: "Environment",
      title: "Sustainable Cities",
      date: "September 22, 2023",
      time:"1 day ago",
      description:
        "Innovative urban planning strategies creating greener, more livable cities for future generations.",
      color: "bg-teal-100",
    },
  ];

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  }, [cards.length]);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      next();
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [isPaused, next]);

  // Calculate the visible cards (current, previous, and next)
  const getVisibleCards = () => {
    const visibleCards = [];
    const totalCards = cards.length;

    // Previous card
    visibleCards.push(cards[(currentIndex - 1 + totalCards) % totalCards]);

    // Current card
    visibleCards.push(cards[currentIndex]);

    // Next card
    visibleCards.push(cards[(currentIndex + 1) % totalCards]);

    return visibleCards;
  };

  return (
    <div className="flex flex-col items-center  ">
      <div className="relative w-full  max-w-sm md:max-w-md overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${
              currentIndex * 20
            }px))`,
            gap: "1rem",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {cards.map((item, index) => (
            <div
              key={item.id}
              className={`  flex-shrink-0 p-4 transition-all duration-300 ${
                index === currentIndex ? "scale-110" : "scale-90 opacity-80"
              }`}
              style={{ width: "calc(100% - 2rem)" }}
            >
              <div className="border rounded-lg p-6 h-64 bg-white shadow-md">
                <h3 className="text-xl text-[16px]  flex items-center gap-2 font-normal font-poppins "> <div className="h-0.5 w-[32px] bg-amber-400 rounded-full"></div> {item.category}</h3>
                <h2 className="font-pt_serif  text-[32px] font-bold ">{item.title}</h2>
               <div className="flex items-center gap-3 mb-2"> <p>{item.date}</p> <div className="w-[5px] h-[5px] bg-blue-500 rounded-full "></div> <p>{item.time}</p></div>
               <p className="text-menu-color mb-1">{item.description}</p>
               <button className="px-2 py-1 bg-amber-600 text-white font-medium">
                Read More
               </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-5 items-center mt-4">
        <button
          onClick={prev}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Previous card"
        >
          <MdKeyboardArrowLeft size={24} />
        </button>

        <div className="flex gap-2">
          {cards.map((card, index) => (
            <button
              key={card.id}

              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-amber-500" : "bg-gray-400"
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Next card"
        >
          <MdKeyboardArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
