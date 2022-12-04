import React from "react";
import Container from "../Container";
import Mobil1 from "../../assets/mobil1.png";

const Jumbotron = () => {
  return (
    <div className="bg-[#F1F3FF] py-[25px]">
      <Container className="flex flex-col md:grid grid-cols-2">
        {" "}
        <div className="flex flex-col gap-[16px]">
          <div className="font-bold text-[36px]">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </div>
          <div className="font-bold">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </div>
          <button
            className="bg-[#5CB85F] text-white px-[12px] py-[8px] font-bold rounded-[2px] w-fit
          "
          >
            Mulai Sewa Mobil
          </button>
        </div>
        <div>
          <img src={Mobil1.src} />
        </div>
      </Container>
    </div>
  );
};

export default Jumbotron;
