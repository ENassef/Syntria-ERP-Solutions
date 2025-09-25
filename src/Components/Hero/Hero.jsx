import React, { useEffect } from "react";
import HeroImg from "../../assets/Hero.png";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around py-10 capitalize relative gap-8 min-h-[80vh]">
      {/* Decorative Circles */}
      <div
        className="rounded-full bg-Peach-Red/10 w-[150px] h-[150px] md:w-[200px] md:h-[200px] absolute top-[8.33%] left-[8.33%] hidden md:block transition-all"
        data-aos="fade-up"
      ></div>
      <div
        className="rounded-full bg-Dark-Blue/10 w-[150px] h-[150px] md:w-[200px] md:h-[200px] absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 hidden lg:block transition-all"
        data-aos="fade-up"
        data-aos-delay="100"
      ></div>
      <div
        className="rounded-full bg-Dark-Blue/10 w-[150px] h-[150px] md:w-[200px] md:h-[200px] absolute bottom-0 left-[33.33%] translate-y-1/2 hidden md:block transition-all"
        data-aos="fade-up"
        data-aos-delay="200"
      ></div>

      {/* Left Section */}
      <div
        id="left"
        className="flex flex-col gap-4 order-2 md:order-1 z-10 max-w-md"
      >
        <p className="title-1">
          \ We Are Here \
        </p>
        <h1 className="title-2">
          Better Insights For <br /> Business Growth
        </h1>
        <button
          type="button"
          className="bg-Peach-Red rounded-md px-6 py-3 text-white hover:bg-opacity-90 hover:cursor-hover focus:outline-none focus:ring-2 focus:ring-Peach-Red transition duration-300 w-fit"
          aria-label="View more about our service"
          onClick={() => (window.location.href = "/service")}
        >
          View More
        </button>
      </div>

	{/* Right Section */}
      <div id="right" className="relative order-1 md:order-2 z-10">
        <div className="imgBgCircle w-full h-full absolute rounded-full -z-10 opacity-30"></div>
        <img
          src={HeroImg}
          alt="Business growth illustration"
          className="max-w-full h-auto md:max-w-lg"
          loading="lazy"
        />
      </div>
    </section>
  );
}