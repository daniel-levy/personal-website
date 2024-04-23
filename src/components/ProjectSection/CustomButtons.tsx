import React from "react";

const CustomButtons = ({ next, previous, ...rest }: any) => {
  const { carouselState } = rest;
  return (
    <div className="absolute flex space-x-3 mt-3 w-full pl-4">
      <button
        className={`px-4 py-2 w-auto m-[4px] rounded-full text-white font-semibold 
        ${
          carouselState.currentSlide === 0
            ? "bg-gray-500 cursor-default"
            : "bg-sky-900 hover:border-sky-900  hover:bg-white hover:border-4 hover:m-0 hover:text-sky-900"
        }`}
        onClick={() => previous()}
      >
        Previous
      </button>
      <button
        className={`px-4 py-2 w-auto m-[4px] rounded-full text-white font-semibold 
        ${
          carouselState.currentSlide === carouselState.totalItems - 1
            ? "bg-gray-500 cursor-default"
            : "bg-sky-900 hover:border-sky-900  hover:bg-white hover:border-4 hover:m-0 hover:text-sky-900"
        }`}
        onClick={() => next()}
      >
        Next
      </button>
    </div>
  );
};

export default CustomButtons;
