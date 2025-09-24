import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
    const testimonialData = [
        {
            name: "John Doe",
            position: "CEO, Company A",
            review: "This service exceeded our expectations! The team was professional and delivered outstanding results.",
            image: "https://via.placeholder.com/150?text=John",
        },
        {
            name: "Jane Smith",
            position: "Marketing Director, Company B",
            review: "Incredible attention to detail and fantastic customer support. Highly recommended!",
            image: "https://via.placeholder.com/150?text=Jane",
        },
        {
            name: "Alex Johnson",
            position: "Product Manager, Company C",
            review: "The process was seamless from start to finish. We're thrilled with the outcome.",
            image: "https://via.placeholder.com/150?text=Alex",
        },
        {
            name: "Emily Davis",
            position: "CTO, Company D",
            review: "Innovative solutions that truly transformed our business. Excellent work!",
            image: "https://via.placeholder.com/150?text=Emily",
        },
        {
            name: "Emily Davis",
            position: "CTO, Company D",
            review: "Innovative solutions that truly transformed our business. Excellent work!",
            image: "https://via.placeholder.com/150?text=Emily",
        },
        {
            name: "Emily Davis",
            position: "CTO, Company D",
            review: "Innovative solutions that truly transformed our business. Excellent work!",
            image: "https://via.placeholder.com/150?text=Emily",
        },
        {
            name: "Emily Davis",
            position: "CTO, Company D",
            review: "Innovative solutions that truly transformed our business. Excellent work!",
            image: "https://via.placeholder.com/150?text=Emily",
        },
        {
            name: "Emily Davis",
            position: "CTO, Company D",
            review: "Innovative solutions that truly transformed our business. Excellent work!",
            image: "https://via.placeholder.com/150?text=Emily",
        },
    ];

    const [isGrabbing, setIsGrabbing] = useState(false);

    return (
        <>
            <section className="py-10">
                <div className="SectionTitle">
                    <p className="title-1">\ From our Customers \</p>
                    <p className="title-2">Testimonials</p>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="w-3/4">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={10}
                            slidesPerView={1.5}
                            centeredSlides={true}
                            loop={true}
                            breakpoints={{
                                640: { slidesPerView: 1, spaceBetween: 5 },
                                768: { slidesPerView: 1.25, spaceBetween: 8 },
                                1024: { slidesPerView: 1.5, spaceBetween: 10 },
                            }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                            navigation
                            onTouchStart={() => setIsGrabbing(true)}
                            onTouchEnd={() => setIsGrabbing(false)}
                            onMouseDown={() => setIsGrabbing(true)}
                            onMouseUp={() => setIsGrabbing(false)}
                            style={{
                                "--swiper-navigation-color": "#ff3e54",
                                "--swiper-pagination-color": "#ff3e54",
                                cursor: isGrabbing
                                    ? "var(--cursor-grabed)"
                                    : "var(--cursor-grab)",
                            }}
                        >
                            {testimonialData.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <TestimonialCard
                                        name={testimonial.name}
                                        position={testimonial.position}
                                        review={testimonial.review}
                                        image={testimonial.image}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}
