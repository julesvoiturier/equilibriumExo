import React from 'react';

const CardTextContent = () => {
    return (
        <div className=' w-full h-[160px] mt-[25px] flex flex-col gap-[12.5px] border-b-[0.5px] border-b-softBlue'>
            <div className='text-white text-left p-0 m-0 text-[25px] transition-[1s] hover:text-cyan'>Equilibrium #3429 </div>
            <div className='text-softBlue text-left  text-[15px] p-0 leading-[25px] font-light'>Our Equilibrium collections promotes balance and calm.</div>
            <div className='price flex w-full justify-between mt-[5px]'>
                <p className='text-cyan flex font-medium text-[15px]'> <div className='ethLogo bg-ethLogo h-full w-[10px] bg-no-repeat bg-center mr-2'></div> 0.041 ETH</p>
                <p className='text-softBlue flex font-light text-[15px]'> <div className='ethLogo bg-clock h-full w-[20px] bg-no-repeat bg-center mr-2'> </div>3 days left</p>
            </div>
        </div>
    );
}

export default CardTextContent;
