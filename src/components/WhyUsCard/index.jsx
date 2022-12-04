import React from "react";

const WhyUsCard = ({ item }) => {
  return (
    <li className="border flex flex-col p-4 justify-around gap-4">
      {item.icon}
      <div className="font-bold text-[16px]">{item.title}</div>{" "}
      <div className="font-bold">{item.subtitle}</div>
    </li>
  );
};

export default WhyUsCard;
