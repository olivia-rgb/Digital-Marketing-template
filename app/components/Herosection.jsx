import React from 'react'
import { GetStarted } from './GetStarted';

const Herosection = () => {
  return (
    <div
      className="flex flex-col items-center px-5 text-white"
      style={{
        backgroundImage: 'url("/images/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex gap-5 justify-between items-center self-stretch w-full text-base max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-2 self-stretch my-auto text-2xl font-semibold tracking-wide whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4925f7b0974f2ee9292053a77528d8959a98db56543dce6a71d899d8258604e9?apiKey=f417b8c00fe14582a1a201b8017683ae&"
            className="shrink-0 aspect-square w-[30px]"
          />
          <div className="flex-auto my-auto">markethink</div>
        </div>
        <div className="flex gap-5 justify-between self-stretch my-auto">
          <div>Features</div>
          <div>Pricing</div>
          <div>About</div>
          <div>Contact Us</div>
        </div>
        <div className="justify-center self-stretch px-6 py-3 mt-3 font-medium text-center border border-solid bg-white bg-opacity-10 border-yellow-200 border-opacity-40 rounded-[116px] max-md:px-5">
          Free Trial
        </div>
      </div>
      <div className="mt-28 text-4xl font-medium tracking-wider text-center max-md:mt-10">
        The Best
      </div>
      <div className="mt-14 text-8xl font-semibold tracking-[3.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Digital Marketing
      </div>
      <div className="mt-11 text-2xl leading-10 text-center w-[686px] max-md:mt-10 max-md:max-w-full">
        Completely synergize resource taxing relationships via premier niche
        markets. Professionally cultivate one-to-one customer
      </div>
      <GetStarted />
    </div>
  );
}
export default Herosection