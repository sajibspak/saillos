import React from 'react';


export const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center px-56 py-6 w-full text-gray-900 border-b border-stone-400 min-h-24 max-md:px-5 max-md:max-w-full">
      <div className="text-2xl font-bold leading-none">
        <span style={{ fontWeight: 800 }}>BR</span>
        <span style={{ fontWeight: 800, color: 'rgba(232,69,42,1)' }}>AI</span>
        <span style={{ fontWeight: 800 }}>NNIFY</span>
      </div>
      <nav className="flex flex-wrap gap-2.5 justify-center items-center self-stretch p-2 my-auto text-base font-medium rounded-md border border-solid border-stone-300 min-w-60 max-md:max-w-full">
        <div className="flex gap-2.5 items-start self-stretch px-4 py-2 my-auto whitespace-nowrap">
          <div>Home</div>
        </div>
        <div className="flex gap-2.5 items-start self-stretch px-4 py-2 my-auto whitespace-nowrap">
          <div>About</div>
        </div>
        <div className="flex gap-2.5 items-start self-stretch px-4 py-2 my-auto font-bold text-red-500 whitespace-nowrap bg-orange-100 rounded-md border border-solid border-zinc-100">
          <div>Expertise</div>
        </div>
        <div className="flex gap-2.5 items-start self-stretch px-4 py-2 my-auto">
          <div>Case Studies</div>
        </div>
        <div className="flex gap-2.5 items-start self-stretch px-4 py-2 my-auto whitespace-nowrap">
          <div>Career</div>
        </div>
      </nav>

      <button className="flex gap-2.5 justify-center items-center self-stretch px-4 pt-3.5 pb-2.5 my-auto text-sm font-semibold leading-none text-red-500 uppercase bg-orange-100 rounded-md border border-red-500 border-solid">
        <span className="self-stretch my-auto">Free Quote</span>
      </button>
    </header>
  );
};
