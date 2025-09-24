import React from "react";
import ProcessCard from "../ProcessCard/ProcessCard";
import { Search, PenTool, Code, CheckCircle } from "lucide-react";

export default function OurProcess() {
    const processData = [
        {
            name: "Research",
            icon: Search,
            number: "01",
            describe:
                "We investigate user needs and market trends to inform our strategy.",
        },
        {
            name: "Design",
            icon: PenTool,
            number: "02",
            describe:
                "We create intuitive and visually appealing designs tailored to your goals.",
        },
        {
            name: "Develop",
            icon: Code,
            number: "03",
            describe:
                "We build robust and scalable solutions using cutting-edge technology.",
        },
        {
            name: "Test",
            icon: CheckCircle,
            number: "04",
            describe:
                "We rigorously test to ensure quality, performance, and reliability.",
        },
    ];

    return (
        <>
            <section className="p-10">
                <div className="SectionTitle">
                    <p className="title-1">\ Planning \</p>
                    <p className="title-2">Our Process</p>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="flex-col md:flex-row flex gap-10 gap-y-8 w-3/4">
                        {processData.map((process, index) => (
                            <ProcessCard
                                key={index}
                                name={process.name}
                                icon={process.icon}
                                number={process.number}
                                describe={process.describe}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
