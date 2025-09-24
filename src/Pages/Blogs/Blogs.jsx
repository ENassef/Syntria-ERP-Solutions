import React from "react";
import img1 from "../../assets/Blog/blog1.png";
import img2 from "../../assets/Blog/blog2.png";
import img3 from "../../assets/Blog/blog3.png";
import img4 from "../../assets/OurLeader/our_leader_1.png";
import bgImg from "../../assets/GetinTouch.png";
const featured = {
  title: "The most Popular Business Of The Year",
  date: "May 4th, 2022",
  author: "Ranold Jeff.",
  read: "2 Min Read",
  img: img1,
};

const smallPosts = [
  {
    title: "The most Popular Business Of The Year",
    date: "Apr 27th, 2022",
    author: "Patricia Anderson",
    img: img2,
  },
  {
    title: "The most Popular Business Of The Year",
    date: "Apr 20th, 2022",
    author: "Elaine Luna",
    img: img3,
  },
];

const gridPosts = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  title: "The most Popular Business Of The Year",
  date: i % 2 === 0 ? "May 4th, 2022" : "Apr 27th, 2022",
  author:
    i % 3 === 0
      ? "Ranold Jeff."
      : i % 3 === 1
      ? "Patricia Anderson"
      : "Elaine Luna",
  img: i % 3 === 0 ? img1 : i % 3 === 1 ? img2 : img3,
}));

export default function Blogs() {
  return (
    <div className="min-h-screen bg-white text-gray-800 ">
      <div
        style={{ backgroundColor: "var(--color-Dark-Blue)" }}
        className=" text-center text-white py-14 mb-20"
      >
        <h1
          className="text-3xl font-extrabold"
          style={{ color: "var(--color-Peach-Red)" }}
        >
          Blogs
        </h1>
        <p className="text-sm text-gray-200 mt-2">Home / Blogs</p>
      </div>

      {/* Featured section */}
      <div>
        <section className=" rounded-lg p-10 ">
          <div className="text-center mb-8">
            <p className="text-Peach-Red  h3 ">\ Our Blog \</p>
            <h2 className="text-Dark-Blue h2">Latest Post</h2>
          </div>

          <div className=" max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Left big card */}
            <article className="rounded-lg p-4 bg-white shadow-sm transition h-full flex flex-col">
              <div className="flex flex-col gap-4 flex-1">
                <img
                  src={featured.img}
                  alt="featured"
                  className="w-full rounded-lg object-cover h-48 md:h-56"
                />

                <div className="flex-1 flex flex-col justify-between p-3">
                  <div>
                    <p className="text-sm text-gray-400">{featured.date}</p>
                    <h3 className="text-Peach-Red h3 mt-3 ">
                      {featured.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={img4}
                        alt="author"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium">{featured.author}</p>
                      </div>
                    </div>
                    <p className="small-copy text-Black-Shed">
                      {featured.read}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Right column small cards */}
            <div className="flex flex-col gap-4 h-full">
              {smallPosts.map((p, idx) => (
                <article
                  key={idx}
                  className=" rounded-lg p-3 bg-white shadow-sm transition flex gap-3  h-full"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-40 h-40 rounded-md object-cover"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-gray-400">{p.date}</p>
                      <h4 className="text-Peach-Red h3 mt-3 ">{p.title}</h4>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <img
                        src={img4}
                        alt="a"
                        className="w-7 h-7 rounded-full"
                      />
                      <p className="text-sm font-medium">{p.author}</p>
                      <span className="small-copy text-Black-Shed ml-auto">
                        2 Min Read
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Grid list section */}
        <section className="mt-16 py-10 bg-gray-200 rounded-lg px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-Peach-Red  h3 ">\ Our Blog \</p>
            <h2 className="ttext-Dark-Blue h2">Latest Post</h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gridPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-40 rounded-md object-cover"
                />
                <h4 className="text-Peach-Red strong-bold mt-3">
                  {post.title}
                </h4>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3">
                    <img src={img4} alt="a" className="w-8 h-8 rounded-full" />
                    <p className="text-sm font-medium">{post.author}</p>
                  </div>
                  <p className="text-xs text-Black-Shed ">{post.date}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
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
                <button className="bg-pink-500 text-white px-5 py-2 rounded-full font-medium shadow-sm">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
