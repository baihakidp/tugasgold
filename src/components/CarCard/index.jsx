import Link from "next/link";
import React from "react";

const CarCard = ({ item }) => {
  return (
    <div
      className="flex  flex-col w-[360px] h-[478px] p-[24px] justify-center gap-3"
      style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="w-[100%] h-[160px]">
        <img src={item.image} />
      </div>
      <p>{item.name}</p>
      <h2>{item.price}/ hari</h2>
      <p>Lorem ipsum</p>
      <Link href={`/detail/${item.id}`}>
        {" "}
        <a
          className="bg-[#5CB85F] text-white px-[12px] py-[8px] font-bold rounded-[2px] w-fit
"
        >
          Pilih Mobil
        </a>
      </Link>
    </div>
  );
};

export default CarCard;
