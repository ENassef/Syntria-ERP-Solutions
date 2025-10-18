  import React from 'react'
  import servicePhoto from "../../assets/WhatWeDo.png"

  export default function Service() {
    return (
      <>
      {/* hero the first */}
 <div className="bg-Dark-Blue text-center p-10 md:p-20">
        <h1 className="text-Peach-Red font-primary font-bold text-3xl md:text-[48px] leading-[40px] md:leading-[58px] cursor-text-hover">
          Services
        </h1>
        <p className="text-Off-White font-primary font-medium text-lg md:text-[24px] leading-[20px] cursor-text-hover">
          Home / Services
        </p>
      </div>

      {/* the second */}
      <div className="py-10 px-5 md:py-15 md:px-20 bg-Off-White flex flex-col md:flex-row items-center gap-10">
        {/* image */}
        <div className="w-full md:w-1/2 cursor-hover">
          <img src={servicePhoto} alt="weWork" className="w-full h-auto" />
        </div>

        {/* what we do */}
        <div className="w-full md:w-1/2">
          <div>
            <h2 className="text-Peach-Red font-primary font-bold text-xl md:text-[24px] leading-[20px] mb-3 cursor-text-hover">
              \ What We Do\
            </h2>
            <h1 className="text-Dark-Blue font-primary font-bold text-2xl md:text-[40px] leading-[30px] md:leading-[50px] cursor-text-hover">
              We Develope Product That People Love to Use.
            </h1>
          </div>

          <div className="mt-6 md:mt-10 font-primary font-medium text-sm md:text-[16px] leading-[24px] md:leading-[26px] cursor-text-hover">
            It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. The point of 
            using Lorem Ipsum is that it has a more-or-less normal distribution 
            of letters...
          </div>
          <div className="flex flex-col sm:flex-row mt-8 md:mt-10 gap-5">
            {/* 1 */}
            <div className="flex items-center bg-white p-4 rounded-2xl flex-1">
              <span className="text-2xl md:text-3xl text-Peach-Red p-4 md:p-5 bg-[#FFECEE] rounded-xl cursor-hover">
                <i class="fa-solid fa-lightbulb"></i>
              </span>
              <div className="ps-4">
                <h2 className="text-Peach-Red font-primary font-bold text-sm md:text-[16px] leading-[20px] cursor-text-hover">
                  Our Vision
                </h2>
                <p className="text-Dark-Blue font-primary font-medium text-xs md:text-[16px] leading-[18px] md:leading-[20px] cursor-text-hover">
                  it is a long esta-blished fact that
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex items-center bg-white p-4 rounded-2xl flex-1">
              <span className="text-2xl md:text-3xl text-Peach-Red p-4 md:p-5 bg-[#FFECEE] rounded-xl cursor-hover">
                <i class="fa-solid fa-trophy"></i>
              </span>
              <div className="ps-4">
                <h2 className="text-Peach-Red font-primary font-bold text-sm md:text-[16px] leading-[20px] cursor-text-hover">
                  Our Goal
                </h2>
                <p className="text-Dark-Blue font-primary font-medium text-xs md:text-[16px] leading-[18px] md:leading-[20px] cursor-text-hover">
                  it is a long esta-blished fact that
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*  Services  */}
<div className="p-6 sm:p-10 md:p-16 lg:p-20">
  <div className="text-center">
    <h3 className="text-Peach-Red font-primary font-bold leading-[20px] text-lg sm:text-xl md:text-[24px] mb-2 cursor-text-hover">
      \ Services \
    </h3>
    <h2 className="text-Dark-Blue font-primary font-bold leading-[40px] text-2xl sm:text-3xl md:text-[40px] cursor-text-hover">
      Our Expertice
    </h2>
  </div>

  <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
    
    {/* 1 */}
    <div className="bg-Off-White p-6 sm:p-8 rounded-2xl w-full">
      <span>
        <i className="fa-solid fa-computer text-Peach-Red text-3xl sm:text-4xl md:text-5xl bg-white p-3 rounded-lg cursor-hover"></i>
      </span>
      <h2 className="text-Dark-Blue mt-5 text-lg sm:text-xl md:text-[20px] font-primary font-extrabold leading-[26px] 
      mb-4 relative after:content-[''] after:block after:w-12 after:h-[5px] after:bg-Peach-Red after:mt-2 after:rounded-md cursor-text-hover">
        Web Design / Development
      </h2>
      <p className="mt-5 font-primary text-sm sm:text-base md:text-[16px] font-medium leading-[26px] cursor-text-hover">
        It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout
      </p>
    </div>

    {/* 2 */}
    <div className="bg-Off-White p-6 sm:p-8 rounded-2xl w-full">
      <span>
        <i className="fa-solid fa-pencil-ruler text-Peach-Red text-3xl sm:text-4xl md:text-5xl bg-white p-3 rounded-lg cursor-hover"></i>
      </span>
      <h2 className="text-Dark-Blue mt-5 text-lg sm:text-xl md:text-[20px] font-primary font-extrabold leading-[26px] 
      mb-4 relative after:content-[''] after:block after:w-12 after:h-[5px] after:bg-Peach-Red after:mt-2 after:rounded-md cursor-text-hover">
        UI/UX Design
      </h2>
      <p className="mt-5 font-primary text-sm sm:text-base md:text-[16px] font-medium leading-[26px] cursor-text-hover">
        It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout
      </p>
    </div>

    {/* 3 */}
    <div className="bg-Off-White p-6 sm:p-8 rounded-2xl w-full">
      <span>
        <i className="fa-solid fa-right-left text-Peach-Red text-3xl sm:text-4xl md:text-5xl bg-white p-3 rounded-lg cursor-hover"></i>
      </span>
      <h2 className="text-Dark-Blue mt-5 text-lg sm:text-xl md:text-[20px] font-primary font-extrabold leading-[26px] 
      mb-4 relative after:content-[''] after:block after:w-12 after:h-[5px] after:bg-Peach-Red after:mt-2 after:rounded-md cursor-text-hover">
        Website Migration
      </h2>
      <p className="mt-5 font-primary text-sm sm:text-base md:text-[16px] font-medium leading-[26px] cursor-text-hover">
        It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout
      </p>
    </div>

    {/* 4 */}
    <div className="bg-Off-White p-6 sm:p-8 rounded-2xl w-full">
      <span>
        <i className="fa-solid fa-mobile-screen text-Peach-Red text-3xl sm:text-4xl md:text-5xl bg-white p-3 rounded-lg cursor-hover"></i>
      </span>
      <h2 className="text-Dark-Blue mt-5 text-lg sm:text-xl md:text-[20px] font-primary font-extrabold leading-[26px] 
      mb-4 relative after:content-[''] after:block after:w-12 after:h-[5px] after:bg-Peach-Red after:mt-2 after:rounded-md cursor-text-hover">
        App Development
      </h2>
      <p className="mt-5 font-primary text-sm sm:text-base md:text-[16px] font-medium leading-[26px] cursor-text-hover">
        It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout
      </p>
    </div>

    {/* 5 */}
    <div className="bg-Off-White p-6 sm:p-8 rounded-2xl w-full">
      <span>
        <i className="fa-solid fa-plug text-Peach-Red text-3xl sm:text-4xl md:text-5xl bg-white p-3 rounded-lg cursor-hover"></i>
      </span>
      <h2 className="text-Dark-Blue mt-5 text-lg sm:text-xl md:text-[20px] font-primary font-extrabold leading-[26px] 
      mb-4 relative after:content-[''] after:block after:w-12 after:h-[5px] after:bg-Peach-Red after:mt-2 after:rounded-md cursor-text-hover">
        HubSpot Integration
      </h2>
      <p className="mt-5 font-primary text-sm sm:text-base md:text-[16px] font-medium leading-[26px] cursor-text-hover">
        It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout
      </p>
    </div>

    {/* 6 */}
    <div className="bg-Off-White p-6 sm:p-8 rounded-2xl w-full">
      <span>
        <i className="fa-solid fa-envelope-open-text text-Peach-Red text-3xl sm:text-4xl md:text-5xl bg-white p-3 rounded-lg cursor-hover"></i>
      </span>
      <h2 className="text-Dark-Blue mt-5 text-lg sm:text-xl md:text-[20px] font-primary font-extrabold leading-[26px] 
      mb-4 relative after:content-[''] after:block after:w-12 after:h-[5px] after:bg-Peach-Red after:mt-2 after:rounded-md cursor-text-hover">
        Email Marketing
      </h2>
      <p className="mt-5 font-primary text-sm sm:text-base md:text-[16px] font-medium leading-[26px] cursor-text-hover">
        It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout
      </p>
    </div>

  </div>
</div>




      </>
    )
  }
