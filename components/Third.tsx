import React from "react";
import Image from "next/image";

const Third = () => {
  return (
    <div className="h-screen flex items-center mt-8 mb-8 justify-center pics">
      <Image
        src="/Features.svg"
        width={1500}
        height={1300}
        alt="features"
        className="m-0"
      />
    </div>
  );
};

export default Third;
