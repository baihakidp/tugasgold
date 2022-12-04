import React from "react";
import ChecklistIcon from "../ChecklistIcon";
import Container from "../Container";
import Service1 from "../../assets/service1.png";

const SERVICES = [
  "Sewa Mobil Dengan Supir di Bali 12 Jam",
  "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  "Sewa Mobil Jangka Panjang Bulanan",
  "Gratis Antar - Jemput Mobil di Bandara",
  "Layanan Airport Transfer / Drop In Out",
];

const OurServices = () => {
  return (
    <div>
      <Container className="flex flex-col gap-3 md:grid grid-cols-2 items-center py-[116px]">
        <div>
          <img src={Service1.src} alt="" />
        </div>
        <div className="flex  flex-col gap-[24px]">
          <div className="font-bold text-[24px]">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </div>
          <div className="font-bold ">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </div>
          <ul className="flex flex-col gap-[16px]">
            {SERVICES.map((item) => {
              return (
                <li className="font-bold flex gap-[16px]">
                  <ChecklistIcon />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default OurServices;
