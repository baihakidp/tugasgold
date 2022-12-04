import axios from "axios";
import React, { useEffect, useState } from "react";
import CarCard from "../CarCard";
import Container from "../Container";

const CarList = ({ cars }) => {
  return (
    <Container className="flex gap-6 pb-[100px]">
      {cars ? cars.map((item) => <CarCard item={item} />) : null}
    </Container>
  );
};

export default CarList;
