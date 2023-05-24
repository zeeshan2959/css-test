import React from 'react'

const Heading = () => {
    return (
        <div className='flex items-center gap-3 pt-2 pb-4 border-b border-[#D7D8DA] mb-3'>
            <span className='text-2xl text-[#0B101A] font-bold'>회원상세</span>
            <div className='flex gap-1'>
                <div className='h-2 w-2 rounded-full bg-[#FF4D4F]'></div>
                <span className='text-[#FF4D4F] text-sm font-medium'>필수항목</span>
            </div>
        </div>
    )
}

export default Heading