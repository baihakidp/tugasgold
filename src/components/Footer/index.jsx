import React from "react";
import Container from "../Container";
import IconFB from "../IconFB";

const Footer = () => {
  return (
    <Container className="flex flex-col gap-4 md:flex-row justify-between py-[280px]">
      <div className="flex flex-col gap-4">
        <div>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
        <div>binarcarrental@gmail.com</div>
        <div>081-233-334-808</div>
      </div>
      <div className="flex flex-col gap-4">
        <div>Our services</div>
        <div>Why Us</div>
        <div>Testimonial</div>
        <div>FAQ</div>
      </div>
      <div>
        <div>Connect with us</div>
        <div className="flex gap-2 mt-2">
          <IconFB />
          <IconFB />
          <IconFB />
          <IconFB />
          <IconFB />
        </div>
      </div>
      <div>
        <div>Copyright Binar 2022</div>
        <div>Logo</div>
      </div>
    </Container>
  );
};

export default Footer;
