import React from "react";

const Live = ({ name, imgurl }) => {
  return (
    <div className="flex bg-stone-300 my-4 lg:my-16 h-20 w-full lg:w-10/12 rounded-2xl mx-auto">
      <div className="flex bg-zinc-700 ml-2 my-2 w-1/4 rounded-full justify-center items-center">
        {imgurl}
      </div>
      <div className="flex flex-col justify-center ml-4">
        <p className="text-zinc-700 text-xl font-bold">{name}</p>
        <p className="text-4xl text-zinc-700 font-bold">0</p>
      </div>
    </div>
  );
};

export default Live;
