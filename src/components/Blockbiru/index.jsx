import React from "react";
import Container from "../Container";

const Blockbiru = () => {
  return (
    <Container className="py-[116px]">
      <div className="text-center p-[64px] md:flex flex-col items-center gap-[16px] bg-[#0D28A6] rounded-[36px]">
        <h1 className="text-white mt-[64px] font-bold text-[36px]">
          Sewa Mobil di (Lokasimu) Sekarang
        </h1>
        <p className="text-white font-bold ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <button
          className="bg-[#5CB85F] text-white px-[12px] py-[8px] font-bold rounded-[2px] w-fit mt-[60px] mb-[60px]
          "
        >
          Mulai Sewa Mobil
        </button>
      </div>
    </Container>
  );
};

export default Blockbiru;
