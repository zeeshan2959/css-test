import React, { useRef, useState, useEffect } from 'react';

const Dropdown = ({ heading, options }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown inline-block relative">
      <button
        onClick={handleToggleDropdown}
        className="dropdown-toggle w-full border border-[#B1B4BB] text-[#0B101A] font-semibold py-2 px-4 rounded-md flex justify-between gap-8 items-center"
      >
        <span className="mr-1">{selectedOption || heading}</span>
        <svg
          className={`fill-current h-4 w-4 ${isDropdownOpen ? 'open' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-menu absolute bg-white shadow-lg z-20 rounded-lg mt-1 w-full">
          {options.map((item, index) => (
            <li
              className={`dropdown-item cursor-pointer ${
                index === 0 ? 'rounded-t-lg' : index === options.length - 1 ? 'rounded-b-lg' : ''
              } ${
                selectedOption === item
                  ? 'py-2 px-4 hover:bg-[#2A3958] hover:text-white'
                  : 'py-2 px-4 hover:bg-[#2A3958] hover:text-white'
              }`}
              key={index}
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
