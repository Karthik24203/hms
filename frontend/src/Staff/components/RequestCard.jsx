import React from "react";

const CardGrid = () => {
  // Array to hold card data, you can add more items here if needed
  const cardsData = [
    { heading: "Heading 1", subject: "Subject 1" },
    { heading: "Heading 2", subject: "Subject 2" },
    { heading: "Heading 3", subject: "Subject 3" },
    { heading: "Heading 4", subject: "Subject 4" },
  ];

  return (
    <div className="m-10 flex gap-4">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="bg-white border border-black hover:bg-blue-200 active:bg-blue-600 p-6 rounded-lg shadow-md w-72 h-48"
        >
          <h1 className="text-xl font-semibold">{card.heading}</h1>
          <p className="mt-4">{card.subject}</p>
          <p>name</p>
          <p>usn</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
