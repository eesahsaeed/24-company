import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';


const PortfolioCard = ({img, desc, title, core, category, country}) => {
    return (
        <div className='flex lg:flex-row flex-col md:mb-14 lg:mb-24'>
            <div className='lg:w-1/2 rounded-2xl md:pt-10 pt-2 px-2 md:px-20' style={{backgroundColor: 'rgba(204,255,204, 0.5)'}}><img src={`/portfolio/${img}`} alt="cardCover" /></div>
            <div className='lg:1/2 md:px-20 px-4 group md:my-6  lg:my-0'>
                <div className='flex h-0 md:h-auto justify-between md:mb-10 items-center opacity-70 md:visible invisible'>
                    <h4 className='text-2xl font-extrabold group-hover:text-blue-600'>{category}</h4>
                    <h5>Under NDA</h5>
                </div>
                <h2 className='md:text-3xl text-xl text-center md:text-left md:my-8 my-6 font-extrabold group-hover:text-blue-600'>{title}</h2>
                <h5 className='md:visible invisible h-0 md:h-auto text-lg my-4'>{desc}</h5>
                <div className='grid grid-cols-2 h-0 md:h-auto invisible md:visible'>
                    <h4 className='text-xl font-bold mr-10'>Country</h4>
                    <h5 className='text-xl'>{country}</h5>
                </div>
                <div className='grid grid-cols-2 h-0 md:h-auto invisible md:visible'>
                    <h4 className='text-xl font-bold mr-10'>Core tech</h4>
                    <h5 className='text-xl'>{core}</h5>
                </div>
                <h4 className='text-xl md:mt-9 h-0 md:h-auto flex items-center font-bold group-hover:text-blue-600 group-hover:opacity-100 opacity-0 '>Explore more<BsArrowRightShort /></h4>
            </div>
        </div>
    )
}

export default PortfolioCard
