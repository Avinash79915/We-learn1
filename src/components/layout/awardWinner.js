import React from 'react'

const AwardWinner = ({ show }) => {
    return (
        <div className={`fixed h-48 w-16 bg-blue-100 bottom-20 left-0 flex justify-center items-center ${show ? "left-0" : "-left-[56px] lg:-left-12 hover:left-0"} duration-300 transition-all`}>
            <div className='flex flex-col justify-center items-center leading-tight'>
                <img src='https://www.eduopinions.com/wp-content/uploads/2018/03/Chandigarh-University-CU-logo.jpg' className='h-7 mb-2' />
                <p className='text-[9px] text-center font-semibold'>Final Year </p>
                <p className='text-[9px] text-center font-semibold mb-2'>Project</p>
                {/* <h1 className='text-center font-bold text-xs'>🏆</h1> */}
                <h1 className='text-center font-bold text-xs'>W</h1>
                <h1 className='text-center font-bold text-xs'>E</h1>
                <h1 className='text-center font-bold text-xs'>L</h1>
                <h1 className='text-center font-bold text-xs'>E</h1>
                <h1 className='text-center font-bold text-xs'>A</h1>
                <h1 className='text-center font-bold text-xs'>R</h1>
                <h1 className='text-center font-bold text-xs'>N</h1>
            </div>
        </div>
    )
}

export default AwardWinner