import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import call from "../public/images/call.svg";
import message from "../public/images/message.svg";
import location from "../public/images/location.svg";
const Seven = () => {
  return (
    <div className="bg-blue-900">
      <div className="flex flex-row pl-12 mb-4 md: gap-20 pt-16 pl-64  pr-64 gap-auto h-30vh justify-between footer">
        <div className="flex flex-column  gap-4">
          <div className="logo text-5xl font-bold text-white sm:text-2xl terra">
            TerraWeb
          </div>
          <div className="flex flex-row gap-3">
            <Image src={location} width={27} height={27} />
            <Image src={call} width={27} height={27} />
            <Image src={message} width={27} height={27} />
          </div>
        </div>
        <div className="flex flex-column gap-2">
          <Link href="/another-page">
            <a className="text-xl text-white">Company</a>
          </Link>
          <Link href="/another-page">
            <a className="text-white">Changelogs</a>
          </Link>
          <Link href="/another-page">
            <a className="text-white">Features Request</a>
          </Link>
          <Link href="/another-page">
            <a className="text-white">Privacy Policy</a>
          </Link>
          <Link href="/another-page">
            <a className="text-white">Legal Notice</a>
          </Link>
        </div>
        <div className="flex flex-column gap-2">
          <h3 className="text-xl text-white">Socials</h3>

          <Link href="/another-page">
            <a className="text-white">Twitter</a>
          </Link>
          <Link href="/another-page">
            <a className="text-white">Github</a>
          </Link>
          <Link href="/another-page">
            <a className="text-white">LinkedIn</a>
          </Link>
        </div>
      </div>
      <hr className="text-white" />
      <div className="flex justify-center">
        <div className="text-white">
          <p>(c) 2023 TerraWeb, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Seven;
