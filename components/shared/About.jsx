import React from "react";

const About = () => {
  return (
    <section className="text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
            <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
              About Us
            </h1>
            <div className="h-1 w-20 rounded bg-green-500"></div>
            <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
              We are a growing friendly community located in the heart of Middle
              Valley, TN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
