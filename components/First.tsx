
import React from 'react';
import Button from './Button';
import Image from 'next/image';

const First = () => {

  return (
    <div className="flex flex-col md:flex-row gap-20 h-90 p-4 mt-10">
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
          color="blue-500"
          text="Start For Free"
          borderColor="blue-500"
          textc="white"
          className="w-20 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
        />
        </div>
        <Image src="/Iconlayout.svg" alt="technologies" width={100} height={100} />
          
      </div>

      {/* Second half of the page */}
      <div className="md:w-2/5 pt-8 pl-8">
        <Image src="/damn.png" alt="infrastructure" width={900} height={600} />
      </div>
    </div>
  );
};

export default First;
