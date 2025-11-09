"use client"; // <<< Add this

import React, { useState } from "react";

export default function HeaderSection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <header className="flex justify-between items-center px-6 sm:px-20 lg:px-56 py-6 w-full text-white border-b border-cyan-500">
                {/* Logo */}
                <img src="/logo.svg" className="h-16 max-md:h-12" alt="Logo" />

                {/* Hamburger Menu Button (Mobile) */}
                <button
                    className="sm:hidden flex items-center justify-center p-2 rounded-md bg-cyan-500 hover:bg-cyan-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Navigation Links */}
                <nav
                    className={`flex flex-col sm:flex-row sm:flex-wrap gap-2.5 justify-center items-center  p-2 font-medium rounded-md border border-cyan-500 bg-cyan-500/10 transition-all duration-300 ${isOpen ? "flex" : "hidden sm:flex"
                        }`}
                >
                    {["Home", "About", "Expertise", "Case Studies", "Career"].map((item) => (
                        <div
                            key={item}
                            className="flex gap-2.5 items-start  px-4 py-2 my-auto whitespace-nowrap rounded-md hover:bg-cyan-500/20 hover:text-cyan-500 hover:font-bold"
                        >
                            {item}
                        </div>
                    ))}
                </nav>

                {/* Free Quote Button */}
                <button className="hidden sm:flex gap-2.5 justify-center items-center  px-4 pt-3.5 pb-2.5 text-sm font-semibold leading-none text-white uppercase bg-cyan-500 hover:bg-cyan-600 rounded-md">
                    Free Quote
                </button>

                {/* Mobile Free Quote Button */}
                {isOpen && (
                    <button className="flex sm:hidden gap-2.5 justify-center items-center w-full mt-2 px-4 pt-3.5 pb-2.5 text-sm font-semibold leading-none text-white uppercase bg-cyan-500 hover:bg-cyan-600 rounded-md">
                        Free Quote
                    </button>
                )}
            </header>
        </div>
    );
}
