import React from 'react'
import bgFooter from '../../assets/GetInTouch.png'

export default function Footer() {
  return (
    <>
      
      <div className="mt-[50px] relative w-full max-w-[945px] h-[250px] sm:h-[294px] mx-auto rounded-md overflow-hidden">
        <img
          src={bgFooter}
          alt="footer"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0E1F51] opacity-60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <p className="font-bold text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-[28px] sm:leading-[40px] text-white max-w-[90%] sm:max-w-[800px] mb-4 font-primary">
            “Some of the History of Our Company is that we are Catching up through Video”
          </p>
          <button className="cursor-hover bg-[#FF3E54] rounded-[5px] px-4 sm:px-6 py-2 text-white font-medium font-primary text-[14px] md:text-[16px]">
            Get In Touch
          </button>
        </div>
      </div>

      

      <section className="mt-12 sm:mt-20 bg-[#0E1F51] text-white px-6 sm:px-12 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* first */}
          <div>
            <h2 className="font-bold font-primary mb-5 relative inline-block after:content-[''] after:block after:w-9 after:h-[4px] after:bg-red-500 after:mt-2">
              About Us
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[22px]">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at
            </p>
            <div className="flex space-x-3 mt-6 font-primary">
              <span className="w-9 h-9 flex justify-center items-center bg-white text-[#FF3E54] rounded-md"><i className="fa-brands fa-linkedin-in text-lg"></i></span>
              <span className="w-9 h-9 flex justify-center items-center bg-white text-[#FF3E54] rounded-md"><i className="fa-brands fa-instagram text-lg"></i></span>
              <span className="w-9 h-9 flex justify-center items-center bg-white text-[#FF3E54] rounded-md"><i className="fa-brands fa-facebook-f text-lg"></i></span>
              <span className="w-9 h-9 flex justify-center items-center bg-white text-[#FF3E54] rounded-md"><i className="fa-brands fa-twitter text-lg"></i></span>
            </div>
          </div>

          {/* second */}
          <div>
            <h2 className="font-bold font-primary mb-4 relative inline-block after:content-[''] after:block after:w-9 after:h-[4px] after:bg-red-500 after:mt-2">
              Services
            </h2>
            <ul className="space-y-2 font-medium text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-primary">
              <li>Web Design/Development</li>
              <li>App Development</li>
              <li>UI/UX Design</li>
              <li>HubSpot Integration</li>
              <li>Email Marketing</li>
              <li>Website Migration</li>
            </ul>
          </div>

          {/* third */}
          <div>
            <h2 className="font-bold font-primary mb-4 relative inline-block after:content-[''] after:block after:w-9 after:h-[4px] after:bg-red-500 after:mt-2">
              Career
            </h2>
            <div className="space-y-5">
              <div className="flex items-center space-x-3 font-primary">
                <span className="text-[#FF3E54] bg-white w-9 h-9 rounded-md flex justify-center items-center">
                  <i className="fa-brands fa-react text-[22px]"></i>
                </span>
                <div>
                  <p className="text-[#FF3E54] font-bold text-[18px] sm:text-[20px] leading-[24px]">ReactJs Dev.</p>
                  <p className="font-medium text-[14px] sm:text-[16px] leading-[22px]">1-5 Years of Exp.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 font-primary">
                <span className="text-[#FF3E54] bg-white w-9 h-9 rounded-md flex justify-center items-center">
                  <i className="fa-brands fa-wordpress text-[22px]"></i>
                </span>
                <div>
                  <p className="text-[#FF3E54] font-bold text-[18px] sm:text-[20px] leading-[24px]">Wordpress Dev.</p>
                  <p className="font-medium text-[14px] sm:text-[16px] leading-[22px]">1-5 Years of Exp.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 font-primary">
                <span className="text-[#FF3E54] bg-white w-9 h-9 rounded-md flex justify-center items-center">
                  <i className="fa-brands fa-wix text-[22px]"></i>
                </span>
                <div>
                  <p className="text-[#FF3E54] font-bold text-[18px] sm:text-[20px] leading-[24px]">Python Developer</p>
                  <p className="font-medium text-[14px] sm:text-[16px] leading-[22px]">1-5 Years of Exp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* fourth */}
          <div>
            <h2 className="font-bold font-primary mb-4 relative inline-block after:content-[''] after:block after:w-9 after:h-[4px] after:bg-red-500 after:mt-2">
              Subscribe Us
            </h2>
            <p className="mb-4 font-primary text-[15px] sm:text-[16px]">
              It is a long established fact that a reader will be distracted by the readable
            </p>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[40px] rounded-md outline-0 px-2 bg-white text-black mb-4"
            />
            <div className="flex justify-end">
              <button className="bg-[#FF3E54] rounded-[5px] px-5 sm:px-6 py-2 text-white font-medium font-primary text-[14px] md:text-[16px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
