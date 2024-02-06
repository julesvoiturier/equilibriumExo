import React from 'react';
import "./cardImage.css"

const CardImage = () => {
    return (
        <div className='group image w-[100%] aspect-square bg-cardImg bg-cover rounded-[10px] relative flex justify-center items-center'>
            <div className='.hoverContainer opacity-50 absolute w-full h-[0%] rounded-[10px] overflow-hidden flex justify-center items-center duration-[50ms] group-hover:h-full'>
                <div className='.logo viewLogo absolute bg-iconView w-[50px] aspect-square bg-no-repeat bg-cover z-10'></div>
                <div className='.hoverImage bottom-0 h-[0%] w-full bg-cyan opacity-40 justify-center items-center duration-[100ms] group-hover:h-full'></div>
            </div>
        </div>
    );
}

export default CardImage;
