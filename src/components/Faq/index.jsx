import React from "react";
import Container from "../Container";
import { Collapse } from "antd";

const { Panel } = Collapse;

const Accordion = [
  "Apa saja syarat yang dibutuhkan?",
  "Berapa hari minimal sewa mobil lepas kunci?",
  "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
  "Apakah Ada biaya antar-jemput?",
  "Bagaimana jika terjadi kecelakaan",
];

const Faq = () => {
  return (
    <Container className="flex flex-col md:flex-row justify-between">
      <div className="flex flex-col items-center gap-3 font-bold md:items-start  ">
        <h1>Frequently Asked Question</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="flex flex-col gap-3 md:w-[50%] pt-4">
        {Accordion.map((item) => {
          return (
            <Collapse defaultActiveKey={["1"]}>
              <Panel header={item} key="1">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  rerum at quis repudiandae voluptatum praesentium
                  necessitatibus consectetur quod aliquam aliquid, id eaque
                  corporis culpa vero sequi? Error aliquam obcaecati repellat.
                </p>
              </Panel>
            </Collapse>
          );
        })}
      </div>
    </Container>
  );
};

export default Faq;
