import React, { useEffect, useRef, useState } from 'react'


const Dropdown = ({ heading, options }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleOpenDropdown = () => {
        setOpenDropdown(!openDropdown);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="dropdown inline-block relative">
            <button
                onClick={handleOpenDropdown}
                className="w-full border border-[#B1B4BB] text-[#0B101A] font-semibold py-2 px-4 rounded-md flex justify-between gap-8 items-center"
            >
                <span className="mr-1">{heading}</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </button>
            <ul className={`${openDropdown === true ? 'w-full dropdown-menu absolute z-20 text-gray-700 mt-2 shadow-xl rounded-lg' : 'hidden'}`}>
                {options.map((item, index) => {
                    return (
                        <li
                            className=""
                            key={index}
                        >
                            <a
                                href="#javascript"
                                onClick={handleOpenDropdown}
                                className={`${index === 0
                                        ? 'rounded-t-lg text-[#141F2D] bg-[#FFFFFF] hover:bg-[#2A3958] hover:text-[#FFFFFF] py-2 px-4 block whitespace-no-wrap'
                                        : index === options.length - 1
                                            ? 'rounded-b-lg text-[#141F2D] bg-[#FFFFFF] hover:bg-[#2A3958] hover:text-[#FFFFFF] py-2 px-4 block whitespace-no-wrap'
                                            : 'text-[#141F2D] bg-[#FFFFFF] hover:bg-[#2A3958] hover:text-[#FFFFFF] py-2 px-4 block whitespace-no-wrap'
                                    }`}
                            >
                                {item}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Dropdown

