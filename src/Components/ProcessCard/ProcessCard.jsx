import React from "react";

export default function ProcessCard({ name, icon: Icon, number, describe }) {
    return (
        <>
            <div className="p-10 rounded-lg bg-Off-White relative w-full md:w-1/4 flex flex-col gap-5">
                <p className="text-Dark-Blue/40 text-h2 font-extrabold absolute right-1/12 top-1/12">
                    {number}
                </p>
                <Icon className="w-12 h-12 mb-2 mt-4" stroke="#ff3e54" />
                <div className="w-2/4 h-2 flex justify-around">
                    <div className="bg-Peach-Red w-3/6 rounded-full"></div>
                    <div className="bg-Peach-Red w-2/6 rounded-full"></div>
                </div>
                <h3 className="text-Dark-Blue text-h3 font-extrabold mt-4">{name}</h3>
                <p className="text-black text-base font-medium mt-2">{describe}</p>
            </div>
        </>
    );
}