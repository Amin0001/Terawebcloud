import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

const Five = () => {
  return (
    <>
      <div className="flex flex-col bg-blue-900 pl-12 md:flex-row gap-20 mt-10 h-30vh">
        {/* First half of the page */}
        <div className="flex flex-col justify-center w-1/2  gap-5">
          <h3 className="text-white text-3xl">Ready to dive into Terraweb?</h3>
          <p className="text-white text-l">
            Access to an array of helpful resources, guides, and FAQs in our comprehensive documentation. Click{' '}
            <Link href="#" passHref>
              <a className="text-blue-500">here</a>
            </Link><br />{' '}
            to learn more.
          </p>
        </div>

        {/* Second half of the page */}
        <div className="w-1/2 flex justify-center">
          <Image src="/block.svg" alt="infrastructure" width={1200} height={900} />
        </div>
      </div>
    </>
  );
};

export default Five;
