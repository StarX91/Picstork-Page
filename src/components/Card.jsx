import React from "react";

const Card = ({ title, date }) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-md flex flex-col items-center">
      <div className="bg-zinc-700 w-full h-32 mb-2"></div>
      <h3 className="text-white text-center">{title}</h3>
      <p className="text-zinc-400 text-center">{date}</p>
    </div>
  );
};

export default Card;
