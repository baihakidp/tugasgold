import { Form, Input, Select } from "antd";
import React from "react";
import Container from "../Container";

const SearchBar = ({ disabled }) => {
  const categoryOptions = [
    {
      value: "small",
      label: "2-4 Orang",
    },
    {
      value: "Medium",
      label: "4-6 Orang",
    },
    {
      value: "large",
      label: "6-8 Orang",
    },
  ];

  const rentedOptions = [
    {
      value: true,
      label: "Disewakan",
    },
    {
      value: false,
      label: "Tidak Disewakan",
    },
  ];

  return (
    <Container>
      <div
        className="grid grid-cols-6 justify-center w-[80%] mx-auto p-[24px] rounded-[8px] relative -top-10 bg-white gap-4 items-center"
        style={{ boxShadow: " 0px 0px 10px rgba(0, 0, 0, 0.15)" }}
      >
        <div>
          <div>Nama Mobil</div>
          <Form.Item name={"name"}>
            <Input placeholder="Ketik nama/tipe mobil" disabled={disabled} />
          </Form.Item>
        </div>
        <div>
          <div>Kategori</div>
          <Form.Item name={"category"}>
            <Select
              placeholder="Ketik nama/tipe mobil"
              options={categoryOptions}
              disabled={disabled}
            />
          </Form.Item>
        </div>
        <div>
          <div>Min Price</div>
          <Form.Item name={"minPrice"}>
            <Input
              placeholder="Ketik nama/tipe mobil"
              type="number"
              disabled={disabled}
            />
          </Form.Item>
        </div>
        <div>
          <div>Max Price</div>
          <Form.Item name={"maxPrice"}>
            <Input
              placeholder="Ketik nama/tipe mobil"
              type="number"
              disabled={disabled}
            />
          </Form.Item>
        </div>
        <div>
          <div>Kategori</div>
          <Form.Item name={"isRented"}>
            <Select
              placeholder="Ketik nama/tipe mobil"
              options={rentedOptions}
              disabled={disabled}
            />
          </Form.Item>
        </div>
        <button
          type="submit"
          className="bg-[#5CB85F] text-white px-[12px] py-[8px] font-bold rounded-[2px] w-fit h-fit 
          "
        >
          Cari Mobil
        </button>
      </div>
    </Container>
  );
};

export default SearchBar;
