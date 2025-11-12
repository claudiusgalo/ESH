'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Sellers() {
  const [isOpen1, setIsOpen1] = useState(false);

  return (
    <div className="mt-00 flex flex-col flex-1">
      <div className="mt-00 flex flex-col ">
        {/* <img
          className="object-cover object-left"
          src="/Buyer_2.gif"
          alt=""
        /> */}
        <div className="flex flex-col p-0">
          {/* <h1 className="font-bold text-[16px] md:text-[20px]">
            Our Five Step Process
          </h1> */}
          <div className="mt-0 flex flex-col flex-1 items-center bg-green-400 bg-opacity-85 border-green-400 border-8">
            <div className="pt-5 flex flex-col justify-center items-center gap-0 bg-white bg-gradient-radial border-green-400 border-8 rounded-xl">
              <Image
                src="/apple-icon.jpg"
                alt="Elcy"
                width={100}
                height={100}
                className="object-cover w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full"
              />
              <div className="flex flex-col p-5">
                <h1 className="font-bold font-serif text-center text-[16px] md:text-[20px] text-black">
                  Be prepared, and sell with confidence!
                </h1>
                <p className="text-[12px] md:text-[16px] font-light text-black pt-2 pr-22 pl-22 pb-10">
                  With more than 20 years of market experience, Elcy will take
                  you through every step of the selling process. Fluent in
                  English, Portuguese, and Spanish, Elcy can virtually anyone
                  irrespective of background through the five steps of home sale
                  so you can sell with confidence and know that you've gotten
                  yourself a deal! Whether you're a first time home seller, or a
                  seasoned realestate junkie Elcy handles it all with
                  uniformity. Home sale typically starts with an initial
                  consultation, consisting of a market analysis and plan for
                  sale. Continuing, when you've decided it's time to sell, Elcy
                  will prepare staging, decoration, and professional photography
                  of your property. Once your home is adequately staged and
                  professionally photographed, Elcy is there to list and promote
                  your home for a quick and profitable sale. Once the offers
                  start coming in, Elcy is there to negociate and ensure that
                  you get the best possible price for your home. Once you're
                  happy with your offer, Elcy is there to close it all. With her
                  global experience, professionally structured sales process,
                  you can be confident that you're getting the best deal on your
                  properties.
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsOpen1(!isOpen1)}
            className="hover:bg-opacity-100 flex h-20 items-center text-2xl bg-green-400 text-white"
          >
            Consultation
          </div>
          {isOpen1 && (
            <div className="hover:bg-opacity-90 flex h-60 items-center text-2xl bg-neutral-300 text-white">
              {' '}
              This is what opened!{' '}
            </div>
          )}

          <div className="hover:bg-opacity-90 flex h-20 items-center text-2xl bg-green-500 text-white">
            Staging & Decoration
          </div>
          <div className="hover:bg-opacity-90 flex h-20 items-center text-2xl bg-green-600 text-white">
            Listing Launch
          </div>
          <div className="hover:bg-opacity-90 flex h-20 items-center text-2xl bg-green-700 text-white">
            Negotiation
          </div>
          <div className="hover:bg-opacity-90 flex h-20 items-center text-2xl bg-green-800 text-white">
            Sale
          </div>
        </div>
      </div>
    </div>
  );
}
