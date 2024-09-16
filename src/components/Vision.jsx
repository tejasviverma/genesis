import React from "react";

const Vision = () => {
  const updates = [
    {
      id: 1,
      title: "NFT Marketplace Demonstration",
      description: "Learn how to create a marketplace using Andromeda AOS on the #JunoNetwork.",
      imgSrc: "/path/to/your/image1.png",
    },
    {
      id: 2,
      title: "Juno Community Call #29",
      description: "Highlighting the collaborative spirit of the Juno community.",
      imgSrc: "/path/to/your/image2.png",
    },
    // Add more cards as needed
  ];

  return (
    <div className="bg-black text-white min-h-screen p-10" id="vision">
      <h1 className="text-6xl font-bold mt-2 mb-10 text-center" style={{ textShadow: '0 0 5px pink' }}>Vision</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {updates.map((update) => (
          <div key={update.id} className="relative group">
            <div
              className="overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105"
              style={{
                boxShadow: '0 0 10px rgba(255, 20, 147, 0.8), 0 0 10px rgba(255, 165, 0, 0.6)', // Neon pink to orange gradient shadow
                background: '#D62839', // No background color
                padding: '1px', // To give the shadow some space around the card
              }}
            >
              <img
                src={update.imgSrc}
                alt={update.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{update.title}</h2>
                <p className="text-gray-400 mt-2">{update.description}</p>
              </div>
            </div>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-white transition-colors">
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
