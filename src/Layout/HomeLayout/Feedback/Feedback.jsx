import React from "react";

const Feedback = () => {
  return (
    <section className="mb-10">
      <div className="text-center ">
        <h1 className="font-bold text-2xl">FeedBack</h1>
        <p className="mt-3">All Clint Feedback</p>
      </div>

      <div>
        <div className="bg-rose-100 relative p-8 md:p-16 w-[80%] mx-auto mt-4">
          <div className="p-6 text-3xl bg_secondary -top-10 -left-9 rounded-full absolute"></div>
          <h1 className="text-[20px]">
            Consider the course's flexibility and schedule, taking into account
            your own availability and commitments. A course that offers options
            for different time slots or flexible attendance policies can
            accommodate various schedules.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
