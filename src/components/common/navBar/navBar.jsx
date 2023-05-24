import React, { useState } from 'react';

const NavBar = () => {
  const navListItems = [
    '기본정보 관리',
    '투자유형 관리',
    '입출금내역 조회',
    '영업내역 조회',
    '투자내역 조회',
    '채권내역 조회',
    'SMS 관리',
    '상담내역 관리',
    '1:1문의내역 조회',
  ];

  const [opendropdown, setOpendropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNavigate = (index) => {
    setActiveIndex(index);
    setOpendropdown(false);
  };

  const handleOpenNavBar = () => {
    setOpendropdown(!opendropdown);
  };

  return (
    <nav className="flex items-center bg-[#EBEEF3] rounded-md">
      {/* Mobile navbar */}
      <div className={`${opendropdown ? 'w-full pt-2 md:hidden' : 'md:hidden w-full py-2'}`}>
        <button
          onClick={handleOpenNavBar}
          type="button"
          className="text-[B1B4BB] pl-4 focus:outline-none text-center"
        >
          <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={`${opendropdown ? 'flex flex-col bg-gray-800 mt-4 px-2 py-3 w-full md:hidden' : 'hidden'}`}>
          {navListItems.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => handleNavigate(index)}
                className={`${activeIndex === index ? 'bg-[#2A3958] text-[#FFFFFF]' : ''} text-[#B1B4BB] p-[10px] hover:bg-[#2A3958] hover:text-[#FFFFFF] block w-full text-left`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* Large screen navbar */}
      <div className="hidden md:flex items-center w-full table-scroll-custom">
        {navListItems.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => handleNavigate(index)}
              className={`${activeIndex === index ? 'bg-[#2A3958] text-[#FFFFFF]' : ''} text-[#B1B4BB] p-[10px] hover:bg-[#2A3958] hover:text-[#FFFFFF] block w-full text-center min-w-[150px] ${
                index === 0 ? 'rounded-l-md' : index === navListItems.length - 1 ? 'rounded-r-md' : ''
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
