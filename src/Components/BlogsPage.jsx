import React from "react";
import img1 from "../assets/Blog/blog1.png";
import img2 from "../assets/Blog/blog2.png";
import img3 from "../assets/Blog/blog3.png";
import img4 from "../assets/OurLeader/our_leader_1.png";
import bgImg from "../assets/GetinTouch.png";
export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The most Popular Business Of the Year",
      date: "May 4th, 2022",
      author: "Ranold Jeff.",
      img: img1,
    },
    {
      id: 2,
      title: "The most Popular Business Of the Year",
      date: "Apr 27th, 2022",
      author: "Patricia Anderson",
      img: img2,
    },
    {
      id: 3,
      title: "The most Popular Business Of the Year",
      date: "Apr 20th, 2022",
      author: "Elaine Luna",
      img: img3,
    },
  ];

  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-Peach-Red  h3">\ Our Blog \</p>
        <h2 className="text-Dark-Blue h2">Latest Post</h2>
      </div>

      {/* Blog cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-Peach-Red font-semibold text-lg mb-2">
                {post.title}
              </h3>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={img4}
                    alt="author"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">{post.author}</p>
                  </div>
                </div>
                <p className="small-copy text-Black-Shed">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <section className="mt-14 mb-24">
        <div
          style={{ backgroundImage: `url('${bgImg}')` }}
          className=" max-w-4xl mx-auto  text-white rounded-xl p-8 "
        >
          <div className=" p-8">
            <p className="text-xl md:text-2xl font-semibold text-center">
              "Some of the History of Our Company is that we are Catching up
              through Video"
            </p>
            <div className="text-center mt-6">
              <button className="bg-[#ff3e54] text-white px-5 py-2 rounded-2xl font-medium shadow-sm">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
