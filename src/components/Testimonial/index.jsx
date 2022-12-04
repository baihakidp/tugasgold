import React from "react";
import TestimonialCard from "../TestimonialCard";
import { Carousel } from "antd";

const Testimonial = () => {
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div>
      <div className="flex flex-col items-center gap-[40px] overflow-hidden">
        <div className="flex flex-col items-center gap-[16px]">
          <h1 className="font-bold text-[24px]">Testimonial</h1>
          <h3 className="font-bold">
            Berbagai review positif dari para pelanggan kami
          </h3>
        </div>

        <ul className="flex gap-2">
          <Carousel className="w-[400px] sm:w-[600px] md:w-[700px] lg:w-[1168px]">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Carousel>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
