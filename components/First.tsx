import React from "react";
import Button from "./Button";
import Image from "next/image";
import java from "../public/images/java.svg";

const First = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 p-4 mt-10 ">
      {/* First half of the page */}
      <div className="flex flex-col justify-center bg-white md:w-2/5 p-5 gap-5">
        <h6 className="text-gray-500">FREE 30 DAYS TRIAL</h6>
        <h1 className="text-4xl font-bold">
          Revolutionizing <br /> Infrastructure as Code
        </h1>
        <p className="text-lg">
          With TerraWeb, you can easily deploy Terraform <br />
          projects from all environments.
        </p>
        <div className="w-50">
          <Button
            color="white"
            text="Start For Free"
            borderColor="blue-500"
            textc="blue-500"
          />
        </div>
        <Image
          src="/Iconlayout.svg"
          alt="technologies"
          width={100}
          height={100}
        />
      </div>

      {/* Second half of the page */}
      <div className="hidden md:w-2/5 md:block  mt-16 ml-32">
        {/* Show image on medium and larger screens */}
        <Image src={java} alt="infrastructure" width={1200} height={900} />
      </div>
    </div>
  );
};

export default First;
