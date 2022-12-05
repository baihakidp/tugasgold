import { Drawer } from "antd";
import React, { useState } from "react";
import Container from "../Container";
import HamburgerIcon from "../HamburgerIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#F1F3FF] py-[25px] ">
      <Container>
        <div className="flex justify-between">
          <div className="bg-[#0D28A6] w-[100px] h-[34px]"></div>
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            <HamburgerIcon />
          </button>
          <Drawer
            title="BCR"
            placement="right"
            open={open}
            onClose={() => {
              setOpen(!open);
            }}
          >
            <div className="flex flex-col md:flex-row gap-[32px] ">
              <a href="">Our Services</a>
              <a href="">Why Us</a>
              <a href="">Testimonial</a>
              <a href="">FAQ</a>
            </div>
          </Drawer>
          <div className="hidden  md:flex flex-col md:flex-row gap-[32px] ">
            <a href="">Our Services</a>
            <a href="">Why Us</a>
            <a href="">Testimonial</a>
            <a href="">FAQ</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
