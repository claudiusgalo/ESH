import React from 'react';

import Image from 'next/image';

export default function Buyers() {
  return (
    <div className="mt-0 flex flex-col flex-1 min-h-screen justify-center items-center">
      <div className="mt-00 flex flex-col justify-center items-center gap-5">
        <img
          className="object-cover object-left"
          src="/Buyer_2.gif"
          alt=""
        />
        <div className="flex flex-col p-5">
          <h1 className="font-bold text-center text-[16px] md:text-[20px]">
            Questions & Answers
          </h1>
          <div className="flex grid-cols-3 con place-content-center">
            <div className="flex">Discovery</div>
            <div className="flex">Market Education</div>
            <div className="flex">Active Search</div>
            <div className="flex">Offer</div>
            <div className="flex">Close</div>
          </div>
        </div>
      </div>
    </div>
  );
}
