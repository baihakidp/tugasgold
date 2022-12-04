import React from "react";
import Orang1 from "../../assets/orang1.png";
import Stars from "../Stars";

const TestimonialCard = () => {
  return (
    <div className="bg-[#F1F3FF] px-[32px] py-[69px] flex gap-[46px]">
      <div>
        <img src={Orang1.src} alt="" />
      </div>
      <div className="flex flex-col gap-[8px]">
        <Stars />
        <p className="font-bold">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”
        </p>
        <div>John Dee 32, Bromo</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
