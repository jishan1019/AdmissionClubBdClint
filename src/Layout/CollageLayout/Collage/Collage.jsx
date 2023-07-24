import React, { useEffect, useState } from "react";

const Collage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/allCollage")
      .then((res) => res.json())
      .then((collage) => {
        setData(collage);
      });
  }, []);

  return (
    <section className="mt-8 mb-8">
      <div className="text-center ">
        <h1 className="font-bold text-2xl">All Collage</h1>
        <p className="mt-3">Chose youre favurite collage</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-4 mt-12 mb-12">
        {data?.map((singleCollage, index) => (
          <div
            className="card rounded-md w-full bg-base-100 shadow"
            key={index}
          >
            <figure>
              <img src={singleCollage?.college_image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{singleCollage?.college_name} </h2>
              <p>
                <strong>Rating</strong>: {singleCollage?.college_rating}
              </p>
              <p>
                <strong>Admission Date</strong>: {singleCollage?.admission_date}
              </p>
              <p>
                <strong>Number of Recharge</strong>:{" "}
                {singleCollage?.num_research}
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-orange-500 text-white font-semibold">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collage;
