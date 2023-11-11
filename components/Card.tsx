import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface CardProps {
  priceMonthly: number;
  priceYearly: number;
  job: string;
  info: string;
  character1: string;
  character2: string;
  character3: string;
  character4: string;
  character5: string;
  showYearlyPrice: boolean;
}

const Card: React.FC<CardProps> = ({
  priceMonthly,
  priceYearly,
  job,
  info,
  character1,
  character2,
  character3,
  character4,
  character5,
  showYearlyPrice,
}) => {
  return (
    <div className="bg-white rounded-lg p-10 gap-8 border border-gray-400 border-opacity-60 m-4 hover:bg-blue-900 hover:text-white">
      <div>
        <h3>
          {showYearlyPrice ? <span>${priceYearly} / Yearly</span> : <span>${priceMonthly} / Monthly</span>}
        </h3>
        <div className="flex items-center space-x-2">
          <Image src="/dev.svg" alt="Icon" width={20} height={20} />
          <h2>{job}</h2>
        </div>
        <p>{info}</p>
        <hr />
        <div className="flex flex-col space-y-2">
          {character1 && (
            <div className="flex items-center">
              <Image src="/check.svg" className="brightness-0" alt="Character 1" width={24} height={24} />
              <span>{character1}</span>
            </div>
          )}
          {character2 && (
            <div className="flex items-center">
              <Image src="/check.svg" className="brightness-0" alt="Character 2" width={24} height={24} />
              <span>{character2}</span>
            </div>
          )}
          {character3 && (
            <div className="flex items-center">
              <Image src="/check.svg" className="brightness-0" alt="Character 3" width={24} height={24} />
              <span>{character3}</span>
            </div>
          )}
          {character4 && (
            <div className="flex items-center">
              <Image src="/check.svg" className="brightness-0" alt="Character 4" width={24} height={24} />
              <span>{character4}</span>
            </div>
          )}
          {character5 && (
            <div className="flex items-center">
              <Image src="/check.svg" className="brightness-0" alt="Character 5" width={24} height={24} />
              <span>{character5}</span>
            </div>
          )}
        </div>
        <div className="flex justify-center mt-">
          <Button
            color='blue-500'
            width={100}
            text="Get Started"
            borderColor=""
            textc="white"
            className="bg-blue-900 hover:bg-white hover:text-blue-900 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
