import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Blockchain Summit 2024",
      description: "Join us for the biggest blockchain summit of the year!",
      date: "June 15, 2024",
      imgSrc: "event1.jpg",
    },
    {
      id: 2,
      title: "NFT Expo",
      description: "Discover the latest innovations in the NFT world.",
      date: "August 23, 2024",
      imgSrc: "event2.jpg",
    },
    {
      id: 3,
      title: "Crypto Hackathon",
      description: "Showcase your skills at the largest crypto hackathon.",
      date: "October 10, 2024",
      imgSrc: "event3.jpg",
    },
    // Add more events as needed
  ];

  const settings = {
    dots: true, // Show dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show one event card at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Automatically slides every 3 seconds
    cssEase: "linear",
  };

  return (
    <div className="bg-black text-white min-h-screen p-10" id='events'>
      <h1 className="text-6xl font-bold mt-2 mb-8 text-center" style={{ textShadow: '0 0 5px pink' }}>Upcoming Events</h1>
      <Slider {...settings}>
        {events.map((event) => (
          <div key={event.id} className="p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src={event.imgSrc}
                alt={event.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-3xl font-bold">{event.title}</h2>
                <p className="text-gray-400 mt-2">{event.description}</p>
                <p className="text-purple-500 mt-4">{event.date}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Events;

