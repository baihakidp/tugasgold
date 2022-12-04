import React from "react";
import Container from "../Container";
import IconDiskon from "../IconDiskon";
import IconJempol from "../IconJempol";
import IconSopir from "../IconSopir";
import IconWaktu from "../IconWaktu";
import WhyUsCard from "../WhyUsCard";

const WhyCard = [
  {
    title: "Mobil lengkap",
    subtitle:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    icon: <IconJempol />,
  },
  {
    title: "Harga Murah",
    subtitle:
      "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    icon: <IconDiskon />,
  },
  {
    title: "Layanan 24 Jam",
    subtitle:
      "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    icon: <IconWaktu />,
  },
  {
    title: "Sopir Profesional",
    subtitle:
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    icon: <IconSopir />,
  },
];

const WhyUs = () => {
  return (
    <div className="pb-[100px]">
      <Container className="flex flex-col gap-[16px]">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-bold text-[24px]">Why Us?</h1>
          <div className="font-bold">Mengapa harus pilih Binar Car Rental?</div>
        </div>

        <ul className="flex flex-col md:grid grid-cols-4 gap-10">
          {WhyCard.map((item) => {
            return <WhyUsCard item={item} />;
          })}
        </ul>
      </Container>
    </div>
  );
};

export default WhyUs;
