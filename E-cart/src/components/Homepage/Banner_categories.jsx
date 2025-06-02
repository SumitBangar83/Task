import React from 'react'

import HomepageBanner from '../../assets/HomepageBanner.png'
import surfexcel from '../../assets/surfexcel.webp'
import pedigree from '../../assets/pedigree.png'
import FruitsVegetables from '../../assets/FruitsVegetables.jpg'
import Ashirvaad from '../../assets/Ashirvaad.jpg'
import FruitsVegetables_IMG from '../../assets/FruitsVegetables_IMG.png'
import BakedBunIMG from '../../assets/BakedBun_IMG.png'

export default function Banner_categories() {
    return (
        <div className='max-sm:w-full '>
            {/* HomepageBanner */}
                        <div className='w-full m-auto mt-8 '>
                            <img src={HomepageBanner} className='rounded-md' alt="" />
                        </div>
            
                        {/* Featurd Categories */}
                        <div className='mb-7 flex mt-16 justify-between items-center '>
                            <div className=''>
                                <h1 className='featuredCategory font-medium'>Featured Categories</h1>
                            </div>
                            <div className='flex gap-4 mt-1 '>
                                <div className=' bg-gray-200  flex items-center py-2 px-3 rounded-full cursor-pointer'>
                                    <i class="fa-solid fa-angle-left text-lg max-sm:text-sm"></i>
                                    
                                </div>
                                <div className=' bg-gray-200 flex items-center py-2 px-3 rounded-full cursor-pointer'>
                                    <i class="fa-solid fa-angle-right text-lg max-sm:text-sm"></i>
                                </div>
                            </div>
                        </div>
            
                        {/* categories */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 sm:gap-16">
                        {/* Cleaning Essentials */}
                            <div className="rounded-md  p-6 flex flex-col items-center" style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
                              <img src={surfexcel} alt="Cleaning Essentials" className="w-full h-auto" />
                              <div className="text-center text-lg max-sm:text-xs font-medium text-gray-600 mt-4">
                                <h1 className="whitespace-nowrap">Cleaning Essentials</h1>
                              </div>
                            </div>

                            {/* Fruits & Veggies */}
                            <div className=" rounded-md border-gray-300 p-6 flex flex-col items-center"style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
                              <img src={FruitsVegetables} alt="Fruits & Veggies" className="w-full h-auto" />
                              <div className="text-lg max-sm:text-xs font-medium text-gray-600 text-center mt-auto">
                                <h1 className='whitespace-nowrap'>Fruits & Veggies</h1>
                              </div>
                            </div>

                            {/* Pets Care */}
                            <div className=" rounded-md border-gray-300 p-6 flex flex-col items-center"style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
                              <img src={pedigree} alt="Pets Care" className="w-full h-auto" />
                              <div className="text-center text-lg max-sm:text-xs font-medium text-gray-600 mt-4">
                                <h1>Pets Care</h1>
                              </div>
                            </div>

                            {/* Multi Grains */}
                            <div className=" rounded-md border-gray-300 p-6 flex flex-col items-center"style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
                              <img src={Ashirvaad} alt="Multi Grains" className="w-full h-auto" />
                              <div className="text-center text-lg max-sm:text-xs font-medium text-gray-600 mt-4">
                                <h1>Multi Grains</h1>
                              </div>
                            </div>
                        </div>

            
                        {/* Categories Banner */}
                        <div className='grid grid-cols-2 gap-10 mt-16 max-sm:block'>
                            <div className=' bg-gray-300 rounded-lg flex'>
                                <div className='w-[55%] max-sm:w-[50%] max-lg:w-fit featuredBanner'>
                                    <div>
                                        <h1 className=' text-3xl max-xl:text-xl max-lg:text-lg max-md:text-md max-sm:text-md max-sm:mt-7 text-gray-800 font-medium mt-9 max-md:mt-6 whitespace-nowrap' >Fruits & Vegetables</h1>
                                    </div>
                                    <div>
                                        <h1 className='text-lg max-lg:text-[14px] text-gray-700 mt-1 max-sm:text-lg'>Get Upto 30% Off</h1>
                                    </div>
                                    <div >
                                        <button className='bg-gray-800 max-md:text-sm mt-6 max-md:mt-3.5 px-3.5 py-2 max-lg:px-2.5 max-lg:py-1.5 max-sm:text-md max-sm:px-3.5 max-sm:py-2 rounded-md text-white cursor-pointer'>Shop Now</button>
                                    </div>
                                </div>
                                <div className='w-[45%] max-sm:flex-none max-sm:w-[40%] max-sm:mx-auto max-lg:flex-1 flex items-center '>
                                    <img src={FruitsVegetables_IMG} alt="" />
                                </div>
                            </div>
                            <div className=' bg-gray-300 rounded-lg flex max-sm:mt-6'>
                                <div className=' max-sm:w-[55%] w-[55%] max-lg:w-fit featuredBanner '>
                                    <div>
                                        <h1 className='text-3xl max-xl:text-xl max-lg:text-lg max-md:text-md max-sm:text-xl max-sm:mt-7 text-gray-800 font-medium mt-9 max-md:mt-6 whitespace-nowrap ' >Freshly Baked Buns</h1>
                                    </div>
                                    <div>
                                        <h1 className='text-lg max-lg:text-[14px] text-gray-700 mt-1 max-sm:text-lg'>Get Upto 25% Off</h1>
                                    </div>
                                    <div >
                                        <button className='bg-gray-800 mt-6 max-md:mt-3.5 px-3.5 py-2 max-md:text-sm max-lg:px-2.5 max-lg:py-1.5 max-sm:text-md max-sm:px-3.5 max-sm:py-2  rounded-md text-white cursor-pointer'>Shop Now</button>
                                    </div>
                                </div>
                                <div className='w-[30%] max-sm:flex-none max-sm:mr-auto banner-img max-lg:flex-1 flex justify-center items-center'>
                                    <img src={BakedBunIMG} alt="" />
                                </div>
                            </div>
                        </div>
        </div>
    )
}
