import React from "react";

const Live = ({ name, imgurl }) => {
  return (
    <div className="flex  bg-stone-300  my-16 h-20 w-10/12 rounded-2xl">
      <div className="flex bg-zinc-700 ml-2 my-2 w-1/4  rounded-full ">
        {imgurl}
      </div>
      <div>
        <p className="text-zinc-700 text-xl ml-4  font-bold ">{name}</p>
        <p className="text-4xl text-zinc-700 ml-4 font-bold ">0</p>
      </div>
    </div>
  );
};

export default Live;
