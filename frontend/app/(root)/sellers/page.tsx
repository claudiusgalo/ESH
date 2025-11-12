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
            className="pl-4 hover:bg-opacity-100 flex h-20 items-center text-2xl bg-green-400 text-white"
          >
            Consultation
          </div>
          {isOpen1 && (
            <div className="hover:bg-opacity-90 h-80 flex flex-row p-0 justify-center items-center flex-1 text-2xl bg-neutral-300 text-white">
              <div className="bg-neutral-50 h-60 w-full items-center justify-center flex flex-col text-center text-[12px] md:text-[16px] font-light text-black pt-2 pr-22 pl-22 pb-10 ">
                <li className="text-m">Market Analysis</li>
                <li className="text-m">Property Overview</li>
                <li className="text-m">Discussion of goals</li>
                <img></img>
              </div>
              <div className="p-1 bg-neutral-50 text-black h-60 flex items-center w-full text-sm">
                <p>
                  During your initial consultation, we start by discussing your
                  goals, ambitions, and future plans beyond the sale of your
                  home. When discussing the sale of your home, we can start by
                  calculating the broader market along with any costs associated
                  with the sale of your home. From here, we can position your
                  property competitive to succeed in the market regardless of
                  market conditions.
                </p>
              </div>
            </div>
          )}

          <div
            onClick={() => setIsOpen1(!isOpen1)}
            className="pl-4 hover:bg-opacity-100 flex h-20 items-center text-2xl bg-green-500 text-white"
          >
            Staging & Decoration
          </div>
          {isOpen1 && (
            <div className="hover:bg-opacity-90 h-80 flex flex-row p-0 justify-center items-center flex-1 text-2xl bg-neutral-50 text-black">
              <div className="bg-neutral-50 text-black h-60 w-full items-center justify-center flex flex-col text-center ">
                <li className="text-m">Property Inspection</li>
                <li className="text-m">Staging Prepration</li>
                <li className="text-m">Professional Photography</li>
                <img></img>
              </div>
              <div className="p-1 bg-green h-60 flex items-center w-full text-sm">
                <p>
                  Once you've decided to sell your home, Elcy will guide you
                  through every aspect of getting your home inspected, staged,
                  and professionally photographed for sale. From checking your
                  gutters to deciding how to style your home, Elcy is there to
                  guide your experience to get the best possible return on your
                  realestate investment.
                </p>
              </div>
            </div>
          )}

          <div
            onClick={() => setIsOpen1(!isOpen1)}
            className="pl-4 hover:bg-opacity-100 flex h-20 items-center text-2xl bg-green-600 text-white"
          >
            Listing Launch
          </div>
          {isOpen1 && (
            <div className="hover:bg-opacity-90 h-80 flex flex-row p-0 justify-center items-center flex-1 text-2xl bg-neutral-300 text-white">
              <div className="bg-black h-60 w-full items-center justify-center flex flex-col text-center ">
                <li className="text-m">Activation of Listing</li>
                <li className="text-m">Open House Showings</li>
                <li className="text-m">Marketing of Listing</li>
                <img></img>
              </div>
              <div className="p-1 bg-green h-60 flex items-center w-full text-sm">
                <p>
                  With the staging of your property completed, it's time to show
                  the world what you've got! With competitive pricing, ample
                  showings, marketing, and beautiful staging of your property,
                  the offers will come in no time.
                </p>
              </div>
            </div>
          )}

          <div
            onClick={() => setIsOpen1(!isOpen1)}
            className="pl-4 hover:bg-opacity-100 flex h-20 items-center text-2xl bg-green-700 text-white"
          >
            Negotiation
          </div>
          {isOpen1 && (
            <div className="hover:bg-opacity-90 h-80 flex flex-row p-0 justify-center items-center flex-1 text-2xl bg-neutral-300 text-white">
              <div className="bg-black h-60 w-full items-center justify-center flex flex-col text-center ">
                <li className="text-m">Offer Evalutation</li>
                <li className="text-m">Counter-Offers</li>
                <li className="text-m">Pending Sale</li>
                <img></img>
              </div>
              <div className="p-1 bg-green h-60 flex items-center w-full text-sm">
                <p>
                  As the offers begin rolling in, Elcy is there as a fierce
                  negotiator in your corner. Whether you're reading to accept an
                  offer or want to send back a counter-offer, Elcy is there to
                  guide you to reaching your desired sale price. Once, you're
                  finally happy with your offer, Elcy is there to defend your
                  sale.
                </p>
              </div>
            </div>
          )}

          <div
            onClick={() => setIsOpen1(!isOpen1)}
            className="pl-4 hover:bg-opacity-100 flex h-20 items-center text-2xl bg-green-800 text-white"
          >
            Sale
          </div>
          {isOpen1 && (
            <div className="hover:bg-opacity-90 h-80 flex flex-row p-0 justify-center items-center flex-1 text-2xl bg-neutral-300 text-white">
              <div className="bg-neutral-300 h-60 w-full items-center justify-center flex flex-col text-center ">
                <li className="text-m">Last Minute Negotiation</li>
                <li className="text-m">Accepting of Offer</li>
                <li className="text-m">Closing</li>
                <img></img>
              </div>
              <div className="p-1 bg-neutral-300 h-60 flex items-center w-full text-sm">
                <p>
                  Once you're happy with your final offer, Elcy will handle any
                  last minute changes to your deal and will guide your sale to a
                  smooth close.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
