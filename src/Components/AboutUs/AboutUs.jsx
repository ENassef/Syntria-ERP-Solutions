import React from 'react'
import people from "../../assets/aboutUs.png";
import { Headset } from "lucide-react";

export default function AboutUs() {
  return (
    <div>
       <div className="flex flex-col py-10 m-2 md:flex-row text-center">
        {/* image */}
        <div className="flex-1 flex justify-center pb-5">
          <img src={people} alt="people" className="w-[500px]" />
        </div>
        {/* details */}
        <div className="flex-1 space-y-3">
          <h3 className="text-Peach-Red font-bold text-left">\ About us \</h3>
          <p className="text-Dark-Blue text-3xl md:text-[40px] font-bold text-left">
            One of the Fastest Way to <br /> Business Growth
          </p>
          <p className=" text-left md:max-w-[500px] text-md">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed
          </p>
          {/* Contact Card */}
          <div className="flex items-center space-x-5 bg-white shadow-xl p-5 rounded-sm">
            <Headset className="text-Peach-Red size-8" />
            <div className="mt-5">
              <p className="text-Dark-Blue font-bold">
                Get Instant Professional Advice
              </p>
              <p>
                Ready to Help :{" "}
                <span className="text-Peach-Red text-sm">+1 356 678 7897</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
