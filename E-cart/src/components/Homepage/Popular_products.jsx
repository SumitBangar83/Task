import React from 'react'
import Haldiram from '../../assets/Haldiram.png'
import fivestar from '../../assets/fivestar.png'
import actII from '../../assets/actII.webp'
import nutrichoice from '../../assets/nutrichoice.jpg'
import amul from '../../assets/amul.jpg'
import lays from '../../assets/lays.jpeg'

export default function Popular_products() {
    return (
        <>
            {/* Popular Products */}
            <div >
                <h1 className='text-3xl max-lg:text-2xl font-medium mt-12'>Popular Products</h1>
            </div>
            {/* Products */}
            <div className='grid grid-cols-5 max-xl:grid-cols-3 max-lg:gap-2 max-md:grid-cols-2 max-md:gap-6  max-sm:gap-3 gap-4 mt-5'>
                
                {/* Product-1 */}
                <div className='p-5 max-sm:p-3  rounded-md 'style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                    <div className='bg-red-600 text-white text-xs font-bold rounded-sm px-2 py-0.5 w-fit'>
                        <h1>Buy 1 Get $4.00 Off</h1>
                    </div>
                    <div className='w-1/2 mt-2 mx-auto ' >
                        <img src={fivestar} />
                    </div>
                    <div className='text-gray-400 mt-8 font-semibold'>
                        <h1 className='text-xs'>Bakery & Biscuits</h1>
                    </div>
                    <div>
                        <h1 className='mt-0.5 text-gray-800 text-sm font-semibold max-sm:text-[12px]'>Cadbury 5 Star Chocolate</h1>
                    </div>
                    <div className='flex mt-1.5'>
                        <div className='flex gap-1 max-sm:gap-0.5 max-sm:text-xs text-yellow-300'>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                        <div className='flex items-center ml-1.5 max-sm:ml-0.5 '>
                            <h1 className='text-sm font-semibold text-gray-400 '>4.3 (4)</h1>
                        </div>
                    </div>
                    <div className='flex justify-between max-sm:items-center mt-4 max-sm:mt-2.5'>
                        <div className='font-semibold text-md my-auto'>
                            <h1 className='text-gray-700 '>$35 <span className='line-through text-gray-500'>$35</span></h1>
                        </div>
                        <div>
                            <button className='bg-green-700 text-white max-sm:text-[12px] font-semibold px-4 py-1 max-sm:px-2.5 max-sm:py-0.5 rounded-sm '>+ Add</button>
                        </div>
                        
                    </div>
                </div>
                
                {/* Product-2 */}
                <div className='p-5 max-sm:p-3  rounded-md 'style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                    <div className='bg-red-600 text-white text-xs font-bold rounded-sm px-2 py-0.5 w-fit'>
                        <h1>Buy 1 Get $4.00 Off</h1>
                    </div>
                    <div className='w-1/2 mt-2 mx-auto ' >
                        <img src={lays} />
                    </div>
                    <div className='text-gray-400 mt-8 font-semibold'>
                        <h1 className='text-xs'>Bakery & Biscuits</h1>
                    </div>
                    <div>
                        <h1 className='mt-0.5 text-gray-800 text-sm font-semibold max-sm:text-[12px]'>Cadbury 5 Star Chocolate</h1>
                    </div>
                    <div className='flex mt-1.5'>
                        <div className='flex gap-1 max-sm:gap-0.5 max-sm:text-xs text-yellow-300'>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                        <div className='flex items-center ml-1.5 max-sm:ml-0.5 '>
                            <h1 className='text-sm font-semibold text-gray-400 '>4.3 (4)</h1>
                        </div>
                    </div>
                    <div className='flex justify-between max-sm:items-center mt-4 max-sm:mt-2.5'>
                        <div className='font-semibold text-md my-auto'>
                            <h1 className='text-gray-700 '>$35 <span className='line-through text-gray-500'>$35</span></h1>
                        </div>
                        <div>
                            <button className='bg-green-700 text-white max-sm:text-[12px] font-semibold px-4 py-1 max-sm:px-2.5 max-sm:py-0.5 rounded-sm '>+ Add</button>
                        </div>
                        
                    </div>
                </div>
                
                {/* Product-1 */}
                <div className='p-5 max-sm:p-3  rounded-md 'style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                    <div className='bg-red-600 text-white text-xs font-bold rounded-sm px-2 py-0.5 w-fit'>
                        <h1>Buy 1 Get $4.00 Off</h1>
                    </div>
                    <div className='w-1/2 mt-2 mx-auto ' >
                        <img src={nutrichoice} />
                    </div>
                    <div className='text-gray-400 mt-8 font-semibold'>
                        <h1 className='text-xs'>Bakery & Biscuits</h1>
                    </div>
                    <div>
                        <h1 className='mt-0.5 text-gray-800 text-sm font-semibold max-sm:text-[12px]'>Cadbury 5 Star Chocolate</h1>
                    </div>
                    <div className='flex mt-1.5'>
                        <div className='flex gap-1 max-sm:gap-0.5 max-sm:text-xs text-yellow-300'>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                        <div className='flex items-center ml-1.5 max-sm:ml-0.5 '>
                            <h1 className='text-sm font-semibold text-gray-400 '>4.3 (4)</h1>
                        </div>
                    </div>
                    <div className='flex justify-between max-sm:items-center mt-4 max-sm:mt-2.5'>
                        <div className='font-semibold text-md my-auto'>
                            <h1 className='text-gray-700 '>$35 <span className='line-through text-gray-500'>$35</span></h1>
                        </div>
                        <div>
                            <button className='bg-green-700 text-white max-sm:text-[12px] font-semibold px-4 py-1 max-sm:px-2.5 max-sm:py-0.5 rounded-sm '>+ Add</button>
                        </div>
                        
                    </div>
                </div>
                
                {/* Product-2 */}
                <div className='p-5 max-sm:p-3 rounded-md 'style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                    <div className='bg-red-600 text-white text-xs font-bold rounded-sm px-2 py-0.5 w-fit'>
                        <h1>Buy 1 Get $4.00 Off</h1>
                    </div>
                    <div className='w-1/2 mt-2 mx-auto ' >
                        <img src={actII} />
                    </div>
                    <div className='text-gray-400 mt-8 font-semibold'>
                        <h1 className='text-xs'>Bakery & Biscuits</h1>
                    </div>
                    <div>
                        <h1 className='mt-0.5 text-gray-800 text-sm font-semibold max-sm:text-[12px]'>Cadbury 5 Star Chocolate</h1>
                    </div>
                    <div className='flex mt-1.5'>
                        <div className='flex gap-1 max-sm:gap-0.5 max-sm:text-xs text-yellow-300'>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                        <div className='flex items-center ml-1.5 max-sm:ml-0.5 '>
                            <h1 className='text-sm font-semibold text-gray-400 '>4.3 (4)</h1>
                        </div>
                    </div>
                    <div className='flex justify-between max-sm:items-center mt-4 max-sm:mt-2.5'>
                        <div className='font-semibold text-md my-auto'>
                            <h1 className='text-gray-700 '>$35 <span className='line-through text-gray-500'>$35</span></h1>
                        </div>
                        <div>
                            <button className='bg-green-700 text-white max-sm:text-[12px] font-semibold px-4 py-1 max-sm:px-2.5 max-sm:py-0.5 rounded-sm '>+ Add</button>
                        </div>
                        
                    </div>
                </div>
                
                {/* Product-1 */}
                <div className='p-5 max-sm:p-3 rounded-md 'style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                    <div className='bg-red-600 text-white text-xs font-bold rounded-sm px-2 py-0.5 w-fit'>
                        <h1>Buy 1 Get $4.00 Off</h1>
                    </div>
                    <div className='w-1/2 mt-2 mx-auto ' >
                        <img src={fivestar} />
                    </div>
                    <div className='text-gray-400 mt-8 font-semibold'>
                        <h1 className='text-xs'>Bakery & Biscuits</h1>
                    </div>
                    <div>
                        <h1 className='mt-0.5 text-gray-800 text-sm font-semibold max-sm:text-[12px]'>Cadbury 5 Star Chocolate</h1>
                    </div>
                    <div className='flex mt-1.5'>
                        <div className='flex gap-1 max-sm:gap-0.5 max-sm:text-xs text-yellow-300'>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                        <div className='flex items-center ml-1.5 max-sm:ml-0.5 '>
                            <h1 className='text-sm font-semibold text-gray-400 '>4.3 (4)</h1>
                        </div>
                    </div>
                    <div className='flex justify-between max-sm:items-center mt-4 max-sm:mt-2.5'>
                        <div className='font-semibold text-md my-auto'>
                            <h1 className='text-gray-700 '>$35 <span className='line-through text-gray-500'>$35</span></h1>
                        </div>
                        <div>
                            <button className='bg-green-700 text-white max-sm:text-[12px] font-semibold px-4 py-1 max-sm:px-2.5 max-sm:py-0.5 rounded-sm '>+ Add</button>
                        </div>
                        
                    </div>
                </div>
                
                {/* Product-2 */}
                <div className='p-5 max-sm:p-3 rounded-md 'style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                    <div className='bg-red-600 text-white text-xs font-bold rounded-sm px-2 py-0.5 w-fit'>
                        <h1>Buy 1 Get $4.00 Off</h1>
                    </div>
                    <div className='w-1/2 mt-2 mx-auto ' >
                        <img src={Haldiram} />
                    </div>
                    <div className='text-gray-400 mt-8 font-semibold'>
                        <h1 className='text-xs'>Bakery & Biscuits</h1>
                    </div>
                    <div>
                        <h1 className='mt-0.5 text-gray-800 text-sm font-semibold max-sm:text-[12px]'>Cadbury 5 Star Chocolate</h1>
                    </div>
                    <div className='flex mt-1.5'>
                        <div className='flex gap-1 max-sm:gap-0.5 max-sm:text-xs text-yellow-300'>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                        <div className='flex items-center ml-1.5 max-sm:ml-0.5 '>
                            <h1 className='text-sm font-semibold text-gray-400 '>4.3 (4)</h1>
                        </div>
                    </div>
                    <div className='flex justify-between max-sm:items-center mt-4 max-sm:mt-2.5'>
                        <div className='font-semibold text-md my-auto'>
                            <h1 className='text-gray-700 '>$35 <span className='line-through text-gray-500'>$35</span></h1>
                        </div>
                        <div>
                            <button className='bg-green-700 text-white max-sm:text-[12px] font-semibold px-4 py-1 max-sm:px-2.5 max-sm:py-0.5 rounded-sm '>+ Add</button>
                        </div>
                        
                    </div>
                </div>
                
                {/* Product-1 */}
                <div className='p-5 max-sm:p-3  rounded-md 'style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                    <div className='bg-red-600 text-white text-xs font-bold rounded-sm px-2 py-0.5 w-fit'>
                        <h1>Buy 1 Get $4.00 Off</h1>
                    </div>
                    <div className='w-1/2 mt-2 mx-auto ' >
                        <img src={amul} />
                    </div>
                    <div className='text-gray-400 mt-8 font-semibold'>
                        <h1 className='text-xs'>Bakery & Biscuits</h1>
                    </div>
                    <div>
                        <h1 className='mt-0.5 text-gray-800 text-sm font-semibold max-sm:text-[12px]'>Cadbury 5 Star Chocolate</h1>
                    </div>
                    <div className='flex mt-1.5'>
                        <div className='flex gap-1 max-sm:gap-0.5 max-sm:text-xs text-yellow-300'>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                        <div className='flex items-center ml-1.5 max-sm:ml-0.5 '>
                            <h1 className='text-sm font-semibold text-gray-400 '>4.3 (4)</h1>
                        </div>
                    </div>
                    <div className='flex justify-between max-sm:items-center mt-4 max-sm:mt-2.5'>
                        <div className='font-semibold text-md my-auto'>
                            <h1 className='text-gray-700 '>$35 <span className='line-through text-gray-500'>$35</span></h1>
                        </div>
                        <div>
                            <button className='bg-green-700 text-white max-sm:text-[12px] font-semibold px-4 py-1 max-sm:px-2.5 max-sm:py-0.5 rounded-sm '>+ Add</button>
                        </div>
                        
                    </div>
                </div>
                
                {/* Product-2 */}
                <div className='p-5 max-sm:p-3  rounded-md 'style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                    <div className='bg-red-600 text-white text-xs font-bold rounded-sm px-2 py-0.5 w-fit'>
                        <h1>Buy 1 Get $4.00 Off</h1>
                    </div>
                    <div className='w-1/2 mt-2 mx-auto ' >
                        <img src={fivestar} />
                    </div>
                    <div className='text-gray-400 mt-8 font-semibold'>
                        <h1 className='text-xs'>Bakery & Biscuits</h1>
                    </div>
                    <div>
                        <h1 className='mt-0.5 text-gray-800 text-sm font-semibold max-sm:text-[12px]'>Cadbury 5 Star Chocolate</h1>
                    </div>
                    <div className='flex mt-1.5'>
                        <div className='flex gap-1 max-sm:gap-0.5 max-sm:text-xs text-yellow-300'>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                        <div className='flex items-center ml-1.5 max-sm:ml-0.5 '>
                            <h1 className='text-sm font-semibold text-gray-400 '>4.3 (4)</h1>
                        </div>
                    </div>
                    <div className='flex justify-between max-sm:items-center mt-4 max-sm:mt-2.5'>
                        <div className='font-semibold text-md my-auto'>
                            <h1 className='text-gray-700 '>$35 <span className='line-through text-gray-500'>$35</span></h1>
                        </div>
                        <div>
                            <button className='bg-green-700 text-white max-sm:text-[12px] font-semibold px-4 py-1 max-sm:px-2.5 max-sm:py-0.5 rounded-sm '>+ Add</button>
                        </div>
                        
                    </div>
                </div>


            </div>
            

        </>
    )
}
