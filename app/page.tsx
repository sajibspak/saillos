import React from 'react';

import { ServicesSection } from './ServicesSection';
import HeaderSection from './HeaderSection';

export default function Home() {

  return (
    <div className="flex flex-col justify-center w-full max-w-full">
      <HeaderSection />
      <div className="flex flex-col relative w-full">
        <img src="/bgCircle.svg" className="absolute max-md:hidden bottom-0 left-1/2 transform -translate-x-1/2 w-2/4 h-auto -z-10 opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <section className="relative flex flex-col px-56 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <img src="/bgCircle.svg" className="absolute lg:hidden bottom-0 left-1/2 transform -translate-x-1/2 w-4/4 h-auto -z-100 opacity-50" />
            <div className="relative z-10 flex flex-col">
              <div className="flex flex-col w-full font-bold text-center max-md:max-w-full">
                <h1 className="text-6xl text-white max-md:max-w-full max-md:text-4xl">
                  Your{" "}
                  <span style={{ fontWeight: 800, textTransform: 'uppercase', color: 'rgba(2, 184, 223, 1)' }}>
                    vision
                  </span>{" "}
                  deserves the{" "}
                  <span style={{ fontWeight: 800, textTransform: 'uppercase', color: 'rgba(2, 184, 223, 1)' }}>
                    best
                  </span>
                  . Let's create something extraordinary{" "}
                </h1>
                <div className="flex gap-2.5 justify-center items-center self-center px-8 py-2.5 mt-5 text-6xl text-white whitespace-nowrap bg-cyan-500 rounded-md max-md:px-5 max-md:text-4xl">
                  <span className="self-stretch my-auto max-md:text-4xl">
                    Together!
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center self-center mt-16 max-w-full text-base w-[761px] max-md:mt-10">
                <p className="leading-6 text-center text-white max-md:max-w-full">
                  <span style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    At{" "}
                  </span>
                  <span style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 700 }}>
                    Saillos
                  </span>
                  <span style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    , we turn your{" "}
                  </span>
                  <span style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 700 }}>
                    ideas
                  </span>
                  <span style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    {" "}
                    into remarkable realities. Our{" "}
                  </span>
                  <span style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 700 }}>
                    creative
                  </span>
                  <span style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    {" "}
                    team is dedicated to crafting tailored{" "}
                  </span>
                  <span style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 700 }}>
                    solutions
                  </span>
                  <span style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    {" "}
                    that inspire and captivate. Together, let's achieve{" "}
                  </span>
                  <span style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 700 }}>
                    greatness
                  </span>
                  <span style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    {" "}
                    and make your{" "}
                  </span>
                  <span style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 700 }}>
                    vision
                  </span>
                  <span style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                    {" "}
                    shine!
                  </span>
                </p>

                <button className="flex gap-2.5 justify-center items-center px-4 py-2.5 mt-6 font-bold bg-cyan-500 hover:bg-cyan-600 rounded-md min-h-10 text-zinc-100">
                  <span className="self-stretch my-auto">
                    Book a free consultation
                  </span>
                </button>
              </div>
            </div>
          </section>
          <ServicesSection />
        </div>
      </div>
    </div>
  );
}
