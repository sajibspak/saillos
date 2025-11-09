import React from 'react';
import { ServiceCard } from './ServiceCard';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/af2cb88f268a45a49cf0e49656d3b9cf/4d493cb4b80b4eb54f44037813b734d1d1b10672?placeholderIfAbsent=true",
      title: "Web Design & Dev",
      description: "Crafting responsive, high-performance websites that turn visitors into customers.",
      buttonText: "Launch My Website",
      isActive: true
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/af2cb88f268a45a49cf0e49656d3b9cf/0d1fa79219e9d0201d1877f53e6770f95ba55c82?placeholderIfAbsent=true",
      title: "Branding & Identity",
      description: "Building bold, memorable brands that capture your story and vision.",
      buttonText: "Build My Brand",
      isActive: false
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/af2cb88f268a45a49cf0e49656d3b9cf/68f50f254a06f1b7e510da3f3032936c66067e83?placeholderIfAbsent=true",
      title: "UI/UX Design",
      description: "Designing intuitive, human-centered experiences that delight and engage users.",
      buttonText: "Enhance My Experience",
      isActive: false
    }
  ];

  return (
    <section className="flex max-md:flex-col gap-10 items-center px-56 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="self-stretch max-md:flex-col max-md:w-full my-auto text-white w-[30%]">
        <h2 className="text-4xl font-semibold leading-[50px] max-md:max-w-full">
          We Design Experiences, Not Just Interfaces
        </h2>
        <p className="mt-11 text-base leading-6 max-md:mt-10 max-md:max-w-full">
          Saillos is a creative design agency that blends strategy, design, and technology to build brands that matter.
        </p>
      </div>

      <div className="flex justify-between gap-8 my-auto w-[70%] 
  max-md:w-full max-md:overflow-x-auto max-md:flex-nowrap 
  scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-transparent">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            buttonText={service.buttonText}
            isActive={service.isActive}
          />
        ))}
      </div>
    </section>
  );
};
