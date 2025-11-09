import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  isActive?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  isActive = false
}) => {
  return (
    <article className="flex flex-col justify-between p-6 bg-cyan-100 rounded-md border border-solid border-stone-300 min-h-80 min-w-60 shadow-[0px_0px_50px_rgba(0,0,0,0.2)] w-full max-md:px-5">
      <div className="w-full">
        <div className="flex gap-2.5 items-center p-2.5 bg-gray-900 h-[60px] w-[60px]">
          <img
            src={icon}
            alt={title}
            className="object-contain self-stretch my-auto w-10 aspect-square"
          />
        </div>
        <div className="flex flex-col mt-7 w-full text-gray-900">
          <h3 className="self-start text-xl Font-Arial font-semibold leading-tight text-center">
            {title}
          </h3>
          <p className="mt-6 text-sm leading-5">
            {description}
          </p>
        </div>
      </div>

      {isActive ? (
        <button className="flex gap-2.5 justify-center items-center self-start py-1 mt-8 text-sm font-medium leading-none text-gray-900 border-b-2 border-cyan-500">
          <span className="self-stretch text-md font-bold my-auto">
            {buttonText}
          </span>
        </button>
      ) : (
        <div className="mt-14 text-md font-bold leading-none text-cyan-500 max-md:mt-10">
          {buttonText}
        </div>
      )}
    </article>
  );
};
