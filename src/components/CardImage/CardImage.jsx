import React from 'react';
import "./cardImage.css"

const CardImage = () => {
    return (
        <div className='image w-[100%] aspect-square bg-cardImg bg-cover rounded-[10px] relative flex justify-center items-center'>
            <div className='.hoverContainer opacity-0 absolute w-full h-full rounded-[10px] overflow-hidden flex justify-center items-center transition-[0.5s] hover:opacity-100'>
                <div className='.logo viewLogo absolute bg-iconView w-[50px] aspect-square bg-no-repeat bg-cover z-10'></div>
                <div className='.hoverImage w-full h-full bg-cyan opacity-50 justify-center items-center'></div>
            </div>
        </div>
    );
}

export default CardImage;
