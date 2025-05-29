import React from 'react'
import cofeebeans from '../../assets/cofeebeans.jpg'
import starbucks from '../../assets/starbucks.jpg'
import cento from '../../assets/cento.webp'
import pineapple from '../../assets/pineapple.jpg'

export default function DailybestSales() {
    return (
        <>
            <div className='text-3xl text-gray-800 max-sm:text-md font-semibold mt-16 max-sm:mt-12'>
                <h1>Daily Best Sales</h1>
            </div>

            <div className='BestDealsCard mt-8'>
                <div style={{ backgroundImage: `url(${cofeebeans})` }} className='p-8 text-white rounded-lg '>  
                    <div className=' sm:text-[clamp(14px,2.5vw,28px)]  font-semibold'>
                        <h1>100% Organic <br className='BestDealsCoffeebreak'/> Coffee Beans.</h1>
                    </div>
                    <div className='mt-2.5 '>
                        <h1>Get the best deal before <br className='' /> close</h1>
                    </div>
                    <div className=''>
                        <button className='mt-3 cursor-pointer bg-green-500 px-4 py-2 rounded-lg max-sm:text-sm font-medium'>Shop Now <i class="ml-1 font-extralight fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>  
                {/* Best deals */}
                <div className='  rounded-lg p-4'style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                    <div className='w-[40%] aspect-[5/8] m-auto mt-8 max-lg:mt-5 '>
                        <img src={starbucks} className='w-full  h-full' alt="" />
                    </div>
                    <div className='text-sm font-medium text-gray-500 mt-10 max-lg:mt-6 '>
                        <h1>Tea Coffee & Drinks</h1>
                    </div>
                    <div className='font-semibold mt-1 '>
                        <h1>Roast Ground Coffee</h1>
                    </div>
                    <div className='flex mt-2.5 justify-between '>
                        <div className='font-semibold flex text-md max-lg:block'>
                            <h1>$13.5</h1>
                            <h1 className='line-through ml-1 max-lg:ml-0 text-gray-400'>$18</h1>
                        </div>
                        <div className='flex gap-0.5 max-lg:text-sm max-lg:items-start text-yellow-300 '>
                            
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

                            <div className='flex items-center ml-1.5 '>
                                <h1 className='text-sm font-semibold text-gray-400 '>4.3</h1>
                            </div>
                        </div>

                    </div>
                    <div className='max-sm:w-11/12 max-sm:m-auto'>
                        <button className='mt-4 bg-green-600 text-lg max-sm:text-sm text-white w-full py-1.5 rounded-lg font-semibold'><i class=" fa-solid fa-plus mr-1.5"></i> Add to cart</button>
                    </div>
                    <div className='max-lg:mt-5 mt-3'>
                        <div className='grid grid-cols-3 max-sm:grid-cols-2 gap-3 max-lg:text-[15px] text-center'>
                            <div className='border-2 border-gray-200 rounded-xl p-2 max-lg:p-1.5 '>
                                <h1>1272 <br /><span className='text-gray-400 max-lg:text-sm'>Days</span> </h1>
                            </div>
                            <div className='border-2 border-gray-200 rounded-xl p-2 max-lg:p-1.5 '>
                                <h1>11 <br /><span className='text-gray-400 max-lg:text-sm'>Hours</span></h1>
                            </div>
                            <div className='border-2 border-gray-200 rounded-xl p-2 max-lg:p-1.5 '>
                                <h1>27 <br /><span className='text-gray-400 max-lg:text-sm'>Mins</span></h1>
                            </div>
                            <div className='border-2 border-gray-200 text-center rounded-xl justify-center p-2 max-lg:p-1.5 '>
                                <h1>22 <br /><span className='text-gray-400 max-lg:text-sm'>Sec</span></h1>
                            </div>
                        </div>
                    </div>

                </div>
               
               
                {/* Best deals */}
                <div className='  rounded-lg  p-4'style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                    <div className='w-[40%] aspect-[5/8] m-auto mt-8 max-lg:mt-5 '>
                        <img src={cento} className='w-full h-full' alt="" />
                    </div>
                    <div className='text-sm font-medium text-gray-500 mt-10 max-lg:mt-6 '>
                        <h1>Tea Coffee & Drinks</h1>
                    </div>
                    <div className='font-semibold mt-1 '>
                        <h1>Roast Ground Coffee</h1>
                    </div>
                    <div className='flex mt-2.5 justify-between '>
                        <div className='font-semibold flex text-md max-lg:block'>
                            <h1>$13.5</h1>
                            <h1 className='line-through ml-1 max-lg:ml-0 text-gray-400'>$18</h1>
                        </div>
                        <div className='flex gap-0.5 max-lg:text-sm max-lg:items-start text-yellow-300 '>
                            
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

                            <div className='flex items-center ml-1.5 '>
                                <h1 className='text-sm font-semibold text-gray-400 '>4.3</h1>
                            </div>
                        </div>

                    </div>
                    <div className='max-sm:w-11/12 max-sm:m-auto'>
                        <button className='mt-4 bg-green-600 text-lg max-sm:text-sm text-white w-full py-1.5 rounded-lg font-semibold'><i class=" fa-solid fa-plus mr-1.5"></i> Add to cart</button>
                    </div>
                    <div className='max-lg:mt-5 mt-3'>
                        <div className='grid grid-cols-3 max-sm:grid-cols-2 gap-3 max-lg:text-[15px] text-center'>
                            <div className='border-2 border-gray-200 rounded-xl p-2 max-lg:p-1.5 max-md:p-2'>
                                <h1>1272 <br /><span className='text-gray-400 max-lg:text-sm'>Days</span> </h1>
                            </div>
                            <div className='border-2 border-gray-200 rounded-xl p-2 max-lg:p-1.5 max-md:p-2'>
                                <h1>11 <br /><span className='text-gray-400 max-lg:text-sm'>Hours</span></h1>
                            </div>
                            <div className='border-2 border-gray-200 rounded-xl p-2 max-lg:p-1.5 max-md:p-2'>
                                <h1>27 <br /><span className='text-gray-400 max-lg:text-sm'>Mins</span></h1>
                            </div>
                            <div className='border-2 border-gray-200 text-center rounded-xl justify-center p-2 max-lg:p-1.5 max-md:p-2'>
                                <h1>22 <br /><span className='text-gray-400 max-lg:text-sm'>Sec</span></h1>
                            </div>
                        </div>
                    </div>

                </div>
               
               
                {/* Best deals */}
                <div className='  rounded-lg  p-4'style={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                    <div className='w-[40%] aspect-[5/8] m-auto mt-8 max-lg:mt-5 '>
                        <img src={pineapple} className='w-full h-full' alt="" />
                    </div>
                    <div className='text-sm font-medium text-gray-500 mt-10 max-lg:mt-6 '>
                        <h1>Tea Coffee & Drinks</h1>
                    </div>
                    <div className='font-semibold mt-1 '>
                        <h1>Roast Ground Coffee</h1>
                    </div>
                    <div className='flex mt-2.5 justify-between '>
                        <div className='font-semibold flex text-md max-lg:block'>
                            <h1>$13.5</h1>
                            <h1 className='line-through ml-1 max-lg:ml-0 text-gray-400'>$18</h1>
                        </div>
                        <div className='flex gap-0.5 max-lg:text-sm max-lg:items-start text-yellow-300 '>
                            
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

                            <div className='flex items-center ml-1.5 '>
                                <h1 className='text-sm font-semibold text-gray-400 '>4.3</h1>
                            </div>
                        </div>

                    </div>
                    <div className='max-sm:w-11/12 max-sm:m-auto'>
                        <button className='mt-4 bg-green-600 text-lg max-sm:text-sm text-white w-full py-1.5 rounded-lg font-semibold'><i class=" fa-solid fa-plus mr-1.5"></i> Add to cart</button>
                    </div>
                    <div className='max-lg:mt-5 mt-3'>
                        <div className='grid grid-cols-3 max-sm:grid-cols-2 gap-3 max-lg:text-[15px] text-center'>
                            <div className='border-2 border-gray-200 rounded-xl p-2 max-lg:p-1.5 max-md:p-2'>
                                <h1>1272 <br /><span className='text-gray-400 max-lg:text-sm'>Days</span> </h1>
                            </div>
                            <div className='border-2 border-gray-200 rounded-xl p-2 max-lg:p-1.5 max-md:p-2'>
                                <h1>11 <br /><span className='text-gray-400 max-lg:text-sm'>Hours</span></h1>
                            </div>
                            <div className='border-2 border-gray-200 rounded-xl p-2 max-lg:p-1.5 max-md:p-2'>
                                <h1>27 <br /><span className='text-gray-400 max-lg:text-sm'>Mins</span></h1>
                            </div>
                            <div className='border-2 border-gray-200 text-center rounded-xl justify-center p-2 max-lg:p-1.5 max-md:p-2'>
                                <h1>22 <br /><span className='text-gray-400 max-lg:text-sm'>Sec</span></h1>
                            </div>
                        </div>
                    </div>

                </div>
               
               
               
               
               
            </div>
            {/* Our Commitment */}
            <div className='OurCommitment mt-20 gap-8 '>
                <div className='max-md:text-center '>
                    <div className=''>
                        <i class="text-5xl text-green-500 font-extralight fa-regular fa-clock"></i>
                    </div>
                    <div className='text-lg text-gray-900 font-semibold mt-6'>
                        <h1>10 minute grocery now</h1>
                    </div>
                    <div className='text-gray-500 leading-relaxed font-medium mt-2 text-sm'>
                        <h1>Get your order deliver to your <br /> doorstep at the earliest from <br /> FreshCart pichup stores near you.</h1>
                    </div>
                </div>
                <div className='max-md:text-center max-sm:mt-3'>
                    <div className=''>
                        <i class="text-5xl text-green-500 font-extralight fa-solid fa-gift"></i>
                    </div>
                    <div className='text-lg text-gray-900 font-semibold mt-6'>
                        <h1>Best Prices & Offers</h1>
                    </div>
                    <div className='text-gray-500 text-sm leading-relaxed font-medium mt-2'>
                        <h1>Cheaper prices than your local <br />supermarket, great cashback offers<br />to top it off. Get best prices & offers.</h1>
                    </div>
                </div>
                <div className='max-md:text-center max-sm:mt-3'>
                    <div className=''>
                        <i class="text-5xl text-green-500 font-extralight fa-solid fa-box-open"></i>
                    </div>
                    <div className='text-lg text-gray-900 leading-relaxed font-semibold mt-6'>
                        <h1>Wide Assortment</h1>
                    </div>
                    <div className='text-gray-500 text-sm leading-relaxed font-medium mt-2'>
                        <h1>Choose from 5000+ products across <br /> food, personal care, household, <br />bakery, veg, non-veg & other categories.</h1>
                    </div>
                </div>
                <div className='max-md:text-center max-sm:mt-3'>
                    <div className=''>
                        <i class="text-5xl text-green-500 font-extralight fa-solid fa-arrow-rotate-left"></i>
                    </div>
                    <div className='text-lg text-gray-900 font-semibold mt-6'>
                        <h1>Easy Returns</h1>
                    </div>
                    <div className='text-gray-500 font-medium mt-2 leading-relaxed text-sm'>
                        <h1>Not satisfied with the product? Return it <br />at the doorstep & get the refund within <br />hours. No questions asked policy.</h1>
                    </div>
                </div>

                
            </div>

        </>
    )
}
