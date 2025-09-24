import React from "react";
import people from "../../assets/images/aboutUs.png";
import { Headset } from "lucide-react";
import person1 from '../../assets/OurLeader/our_leader_1.png'
import person2 from '../../assets/OurLeader/our_leader_2.png'
import person3 from '../../assets/OurLeader/our_leader_3.png'
import person4 from '../../assets/OurLeader/our_leader_4.png'
import Title from "../../Components/Title/Title";


export default function About() {

  return (
    <div>
      {/* title */}
     <Title/>

      <div className="flex flex-col py-10 m-2 md:flex-row text-center">
        {/* image */}
        <div className="flex-1 flex justify-center pb-5">
          <img src={people} alt="people" className="w-[500px]" />
        </div>
        {/* details */}
        <div className="flex-1 space-y-3">
          <h3 className="text-Peach-Red font-bold text-left">\ About us \</h3>
          <p className="text-Dark-Blue text-3xl md:text-[40px] font-bold text-left">
            One of the Fastest Way to <br/> Business Growth
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
      {/* our leaders */}
      <div className="py-10">
        <div className="text-center">
          <h5 className="text-sm text-Peach-Red">\ Team \</h5>
          <h1 className="text-3xl font-bold text-Dark-Blue">Our Leaders</h1>
        </div>
        {/* images */}
        <div className="flex flex-col items-center md:py-5 md:flex-row md:justify-around">
          <div className="text-center">
            <img src={person1} alt="person1" className="w-[200px]" />
            <h1 className="text-Peach-Red">Larry F. Burnett</h1>
            <p className="text-Dark-Blue">CEO</p>
          </div>          
           <div className="text-center">
            <img src={person2} alt="person2" className="w-[200px]" />
            <h1 className="text-Peach-Red">Meghan J. Webb</h1>
            <p className="text-Dark-Blue">CTO</p>
          </div> 
           <div className="text-center">
            <img src={person3} alt="person3" className="w-[200px]" />
            <h1 className="text-Peach-Red">Yvonne J. Cullum</h1>
            <p className="text-Dark-Blue">CFO</p>
          </div> 
           <div className="text-center">
            <img src={person4} alt="person4" className="w-[200px]" />
            <h1 className="text-Peach-Red">Diana H. Williams</h1>
            <p className="text-Dark-Blue">COO</p>
          </div> 
        </div>
        <div className="flex flex-col items-center md:py-5 md:flex-row md:justify-around">
          <div className="text-center">
            <img src={person1} alt="person1" className="w-[200px]" />
            <h1 className="text-Peach-Red">Larry F. Burnett</h1>
            <p className="text-Dark-Blue">CEO</p>
          </div>          
           <div className="text-center">
            <img src={person2} alt="person2" className="w-[200px]" />
            <h1 className="text-Peach-Red">Meghan J. Webb</h1>
            <p className="text-Dark-Blue">CTO</p>
          </div> 
           <div className="text-center">
            <img src={person3} alt="person3" className="w-[200px]" />
            <h1 className="text-Peach-Red">Yvonne J. Cullum</h1>
            <p className="text-Dark-Blue">CFO</p>
          </div> 
           <div className="text-center">
            <img src={person4} alt="person4" className="w-[200px]" />
            <h1 className="text-Peach-Red">Diana H. Williams</h1>
            <p className="text-Dark-Blue">COO</p>
          </div> 
        </div>
      </div>
    </div>
  );
}
