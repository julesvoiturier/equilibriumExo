import React from 'react';

const BottomCard = () => {
    return (
        <div className='bottomCard w-full h-[75px] flex items-center'>
            <div className='text text-[15px] text-softBlue flex items-center'> 
            <div className='bg-avatar bg-cover border-[1px] border-white rounded-full h-[35px] w-[35px] mr-4'></div>
            Creation of 
            <span className='text-white ml-1 transition-[1s] hover:text-cyan'>Jules Wyvern</span>
            </div>
        </div>
    );
}

export default BottomCard;
