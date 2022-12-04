import React from "react";
import IconPeople from "../IconPeople";

const DetailCard = ({ data }) => {
  // const isOpen = true;
  // const test = isOpen && "buka";
  // const testTer = data.category === "large" ? "buka" : null;
  // console.log(data.category === "large");
  return (
    <div
      className="flex  flex-col w-[360px] h-[435px] p-[24px] justify-center gap-4"
      style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="w-[100%] h-[160px]">
        <img src={data.image} />
      </div>
      <div className="pt-[24px] font-bold ">
        <p>{data.name}</p>
        <p className="flex gap-4 items-center">
          {" "}
          <IconPeople />
          {data.category === "small" ? "2-4 orang" : null}
          {data.category === "Medium" ? "4-6 orang" : null}
          {data.category === "large" ? "6-8 orang" : null}
        </p>
      </div>

      <div className="flex justify-between font-bold pt-[24px]">
        <p>Total</p>
        <h2>{data.price}</h2>
      </div>
    </div>
  );
};

export default DetailCard;
