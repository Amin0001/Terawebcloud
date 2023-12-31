import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import MyCarousel from "./Carousel";

const Six = () => {
  return (
    <div className="pt-12 h-screen">
      <div className="mb-8">
        <h3 className="flex justify-center text-3xl font-bold w-30 pb-4">
          <span className="underline mr-1">Clients</span>{" "}
          <span>Testimonials</span>
        </h3>
        <p className="flex justify-center text-xl">
          Discover the experiences shared by our valued
          <br /> clients.
        </p>
      </div>
      <div className="pl-auto pr-auto">
        <MyCarousel />
      </div>
    </div>
  );
};

export default Six;
