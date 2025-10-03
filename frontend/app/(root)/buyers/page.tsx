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
            <div>Hello</div>
            <div>Howdy</div>
            <div>Rowdy</div>
          </div>
          <p className="text-[12px] md:text-[16px]">
            Elcy is a highly experienced Realtor and licensed Broker who has
            been serving clients since 2002. Fluent in English, Portuguese, and
            Spanish, she brings a unique international perspective and a deep
            understanding of diverse cultures. Known for her patience and
            personalized approach, Elcy has guided first-time buyers and
            seasoned investors alike through successful transactions across
            Northern Virginia and the Shenandoah Valley. Her global clientele
            and track record of delivering results are a testament to her
            dedication, expertise, and passion for helping people achieve their
            real estate goals. Reach out today for a free consultation.
          </p>
        </div>
      </div>
    </div>
  );
}
