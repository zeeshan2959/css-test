import React, { useState } from 'react'
import Dropdown from '../../components/form/dropdown/dropdown'
import Button from '../../components/common/button/button'
import MemberTable from '../../components/pages/memberDetail/memberTable'
import Pagination from '../../components/common/pagination/pagination'
import { FaExclamation } from 'react-icons/fa'

import "./index.css"

const MemberPage = () => {
  const options = ['승인여부 전체', '승인대기', '승인완료', '승인거부']
  const options1 = ['신청일시순', '승인일시순']
  const options2 = ['승인완료', '승인거부']

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className=''>
      
      <div className='flex flex-col lg:flex-row justify-between gap-y-4 lg:gap-y-0 lg:items-center border-b border-[#D7D8DA] pb-3 mt-12'>
        <div className='flex items-center gap-3'>
          <span className='text-xl text-[#0B101A] font-semibold'>신청 목록</span>
          <span className='text-[#5A616A] text-sm font-medium'>(총 100명 | 승인대기 <span className='text-[#FF4D4F]'>1</span> 건)</span>
        </div>
        <div className='flex flex-col sm:flex-row gap-1'>
          <Dropdown heading="승인여부 전체" options={options} />
          <Dropdown heading="신청일시순" options={options1} />
          <Dropdown heading="승인상태 변경" options={options2} />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-y-4 sm:gap-y-0 py-4'>
        <Button text="등록" classes="px-[30px] py-[10px] rounded-[10px] bg-[#2A3958] text-[#FFFFFF] order-2 sm:order-1" onclick={() => setModalVisible(!modalVisible)} />
        <div className='flex items-center gap-1 order-1 sm:order-2'>
          <Button text="선택한 0건" classes="px-[10px] py-[10px] rounded-[10px] text-[#5A616A]" />
          <Dropdown heading="신청일시순" options={options1} />
          <Button text="저장" classes="px-[30px] py-[10px] rounded-[10px] bg-[#2A3958] text-[#FFFFFF]" onclick={() => setModalVisible(!modalVisible)}/>
        </div>
      </div>
      <MemberTable />
      <Pagination />
            
      {/* Modal */}
      {modalVisible &&

        <div id="popup-modal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 bg-gray-800/30 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[100vh] max-h-full">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className='flex justify-between'>
                <div className='bg-[#FFFAEB] h-[40px] w-[40px] rounded-full flex items-center justify-center text-center ml-8 mt-6'>
                  <div className="bg-[#FEF0C7] h-[30px] w-[30px] rounded-full flex items-center justify-center text-center">
                    <FaExclamation size="1rem" className="font-bold text-normal text-[#D46B08]" />
                  </div>
                </div>
                <button onClick={() => setModalVisible(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="py-6 text-center">
                <h3 className="text-lg text-gray-500 dark:text-gray-400 mb-8 font-bold">선택된 2건의 승인상태를 변경하시겠습니까?</h3>
                <button data-modal-hide="popup-modal" type="button" className="text-white bg-[#2A3958] focus:outline-none border-2 border-[#2A3958] font-medium rounded-lg text-normal font-bold inline-flex items-center px-16 py-2.5 text-center mr-4">
                  확인
                </button>
                <button onClick={() => setModalVisible(false)} data-modal-hide="popup-modal" type="button" className="text-[#2A3958] bg-white focus:outline-none focus:ring-[#2A3958] rounded-lg border-2 border-[#2A3958] text-normal font-bold px-16 py-2.5 focus:z-10">취소</button>
              </div>
            </div>
          </div>
        </div>
      }




    </div>
  )
}

export default MemberPage