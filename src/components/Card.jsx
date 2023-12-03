import React from "react";

const Card = ({ data }) => {
  return (
    <div className="border flex flex-col shadow-sm shadow-gray-200 justify-center items-center bg-white p-5 rounded-md  hover:shadow-md hover:shadow-gray-400 transition-all duration-200 ease-in w-[25%]">
      <img
        className="w-[100px] h-[100px] border rounded-full bg-orange-100  border-red-500"
        src={data.avatar}
        alt=""
      />
      <h1 className="font-bold pb-2">
        <span>{data.first_name}</span> <span>{data.last_name}</span>{" "}
      </h1>
      <h1 className="text-sm text-center font-semibold text-gray-500">
        {data.gender}
      </h1>
      <h1 className="text-sm text-center font-semibold text-gray-500">
        {data.email}
      </h1>
      <h1 className="text-sm font-semibold text-gray-500">{data.domain}</h1>
    </div>
  );
};

export default Card;
