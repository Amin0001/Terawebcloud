import React from 'react';
import Image from 'next/image';

const Second = () => {
  return (
    <>
      <div className="flex flex-col items-center p-12 bg-gray-100 mb-0">
        {/* First row with a single icon */}
        <div className="flex justify-center items-center ">
          <Image src="/dzp.svg" alt="how it works" width={450} height={170} />
        </div>

        {/* Second row with two icons */}
        <div className="flex justify-between w-full">
          <div className="flex items-center w-1/2 pl-12">
            <div className="flex justify-center items-center">
              <Image src="/dcp.svg" alt="how it works" width={70} height={440} />
            </div>
            <div className="flex justify-center items-center pl-4">
              <Image src="/ddp.svg" alt="how it works" width={300} height={440} />
            </div>
          </div>

          {/* Single icon occupying the other half */}
          <div className="flex justify-center items-center w-1/2">
            <div className="flex justify-center items-center">
              <Image src="/dap.svg" alt="how it works" width={500} height={380} />
            </div>
          </div>
        </div>
      </div></>
  );
};

export default Second;
