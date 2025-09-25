import React from "react";
import { Quote } from "lucide-react";
import image from "../../assets/OurLeader/our_leader_3.png";

export default function TestimonialCard({ name, position, review }) {
    return (
        <>
            <div className="p-6 rounded-xl bg-Off-White relative w-full flex flex-col items-center text-left">
                <div className="flex justify-between w-full mb-4">
                    <div>
                        <img
                            src={image}
                            alt={name}
                            className="w-20 h-20 rounded-full"
                        />
                    </div>
                    <div>
                        <Quote className="text-Peach-Red w-16 h-16" />
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-black text-base mb-4">{review}</p>
                    <h3 className="text-Peach-Red text-body font-extrabold">
                        {name}
                    </h3>
                    <p className="text-Dark-Blue text-small">{position}</p>
                </div>
            </div>
        </>
    );
}
