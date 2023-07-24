import React from "react";

const Cover = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/m4cRmB2/3d-rendering-world-book-day-banner-with-empty-space-7209-757.jpg"
          className="w-full h-48 md:h-[80%]"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div>
            <h1 className="text-2xl font-semibold md:text-5xl mb-4 ml-2 ">
              Find Your Best Collage
            </h1>
            <div className="md:text-lg text-xs mt-2 mb-2 ml-2 text-white ">
              <p>Embark on an exciting journey of knowledge and growth.</p>
              <p>Explore a diverse array of universities and colleges</p>
              <p>that promise to shape your future.</p>
            </div>
            <button className="pt-2 ml-2 pb-2 pl-4 pr-4 bg-orange-500 font-semibold rounded-md mt-3 text-white">
              Find Collage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
