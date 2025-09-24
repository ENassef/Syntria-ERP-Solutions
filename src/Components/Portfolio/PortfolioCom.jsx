import React from 'react'
import photo1 from '../../assets/OurWork/OourWork1.png'
import photo2 from '../../assets/OurWork/OourWork2.png'
import photo3 from '../../assets/OurWork/OourWork3.png'
import photo4 from '../../assets/OurWork/OourWork4.png'
import photo5 from '../../assets/OurWork/OourWork5.png'


export default function Portfolio() {
  return (
    <section className="container mx-auto px-4 mt-20">
      
      <div className="text-center mt-5 space-y-3">
        <h2 className="text-[#FF3E54] font-bold text-[24px] leading-[20px] font-primary cursor-text-hover">\ Portfolio \</h2>
        <h1 className="text-[#0E1F51] font-bold text-[40px] leading-[40px] font-primary cursor-text-hover">Our Work</h1>
      </div>

<div className=" m-[30px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 border border-gray-300 rounded-lg overflow-hidden w-fit text-[#929292] font-semibold text-[16px] leading-[24px] text-center">
  <button className="px-6 py-2 bg-[#FF3E54] text-white border border-gray-300 cursor-hover">ALL</button>
  <button className="px-6 py-2 border border-gray-300 cursor-hover">LIFE</button>
  <button className="px-6 py-2 border border-gray-300 cursor-hover">MOMENTS</button>
  <button className="px-6 py-2 border border-gray-300 cursor-hover">NATURE</button>
  <button className="px-6 py-2 border border-gray-300 cursor-hover">STORIES</button>
  <button className="px-6 py-2 border border-gray-300 cursor-hover">TRAVEL</button>
</div>



      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <img src={photo1} alt="" className="w-full h-full object-cover rounded-md" />
        </div>

        <div>
          <img src={photo2} alt="" className="w-full h-full object-cover rounded-md" />
        </div>

        <div>
          <img src={photo3} alt="" className="w-full h-full object-cover rounded-md" />
        </div>

        <div>
          <img src={photo4} alt="" className="w-full h-full object-cover rounded-md" />
        </div>

        <div>
          <img src={photo5} alt="" className="w-full h-full object-cover rounded-md" />
        </div>
      </div>

      
      <div className="text-center mt-11">
        <button className="cursor-hover bg-[#FF3E54] rounded-[5px] w-[130px] h-[44px] text-white font-medium text-[16px] leading-[26px] font-primary">
          Get In Touch
        </button>
      </div>
    </section>
  )
}
