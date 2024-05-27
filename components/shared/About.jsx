import React from "react";

const About = () => {
  return (
    <section className="text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
            <h1 className="mb-2 text-2xl font-semibold text-gray-900 sm:text-3xl">
              About Us
            </h1>
            <div className="h-1 w-20 rounded bg-emerald-500"></div>
            <p className="mt-2 w-full leading-relaxed text-gray-500 lg:w-1/2">
              We are a friendly neighborhood community located in the heart of
              Hixson, TN.
            </p>
            <p className="mt-4 w-full leading-relaxed text-gray-500 lg:w-1/2">
              Our quiet neighborhood came together during the covid years.
              Needing a way to get out of the house and connect with other
              humans, we started neighborhood events such as Easter eggs hunts,
              Fourth of July cookout and fireworks, and a halloween potluck with
              trick or treating for the kids.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
