import React from 'react';
import Image from 'next/image';
import Button from './Button'


const Card = ({ price, job, info, character1, character2, character3, character4, character5 }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-10 gap-8 hover:text-white hover:bg-blue-700">
      <div>
        <h3><span>${price}</span>/Month</h3>
        <div className="flex items-center space-x-2">
          <Image src="/Vector.svg" alt="Icon" width={10} height={10} />
          <h2>{job}</h2>
        </div>
        <p>{info}</p>
        <hr />
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <Image src="/check.svg"  className="brightness-0" alt="Character 1" width={24} height={24} />
            <span>{character1}</span>
          </div>
          <div className="flex items-center">
            <Image src="/check.svg"  className="brightness-0"  alt="Character 2" width={24} height={24} />
            <span>{character2}</span>
          </div>
          <div className="flex items-center">
            <Image src="/check.svg"  className="brightness-0" alt="Character 3" width={24} height={24} />
            <span>{character3}</span>
          </div>
          <div className="flex items-center">
            <Image src="/check.svg"  className="brightness-0" alt="Character 4" width={24} height={24} />
            <span>{character4}</span>
          </div>
          <div className="flex items-center">
            <Image src="/check.svg"  className="brightness-0" alt="Character 5" width={24} height={24} />
            <span>{character5}</span>
          </div>
           <Button color='blue-500'width={100} text="Get Started" borderColor="blue-500" textc="white" 
             className=" hover:bg-white hover:text-blue transition duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  );
};

export default Card;
