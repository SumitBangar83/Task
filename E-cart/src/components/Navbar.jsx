import React from 'react'
export default function Navbar() {
  return (
    <div className='sticky top-0 bg-white w-11/12 m-auto mt-10 max-sm:mt-5 border-b-2  border-gray-300'>
        <div className='w-full bg-gray-200 max-sm:bg-white pt-2 pb-2 '>
			<div className='w-10/12 max-xl:w-11/12 max-sm:w-full  max-sm: m-auto flex max-sm:block justify-between '>
				<div className=' max-sm:bg-gray-200 max-sm:py-0.5 rounded-sm'>
					<h1 className='max-sm:text-[16px]  w-fit max-sm:m-auto'>Super Value Deals - Save more with Coupons</h1>
				</div>
				<div className='max-sm:text-[13px] max-sm:mr-1 max-sm:mt-3.5 flex justify-center max-sm:justify-end items-center cursor-pointer'>
					<h1 >English</h1>
					<i class="ml-2 fa-solid fa-angle-down mt-1"></i>
				</div>
			</div>

        </div>

		<div className='w-10/12 max-xl:w-11/12 m-auto mt-6 flex max-sm:block justify-between '>
			<div className='flex flex-1'>

			
			{/* Navbar Search bar & Features */}
			<div className='flex items-center '>
				<div className='h-fit'>
					<i class="mt-2 text-2xl max-lg:text-xl text-green-600 fa-solid fa-cart-shopping"></i>
				</div>
			<div className=''>
					<h1 className='ml-2 text-2xl max-sm:text-xl text-green-950 font-medium'>FreshCart</h1>
				</div>
			</div>

			{/* flex-wrap div */}			
			<div className='flex gap-3 max-sm:gap-1 justify-center flex-1 max-md:justify-end items-center max-md:w-full max-sm:ml-10 '>
				<div className='h-10 max-xl:h-8 flex items-center w-8/12 max-sm:w-fit rounded-md pr-4 max-sm:pr-1.5 border-2 border-green-100'>
					<div className='w-full '>
						<input type="text" className='w-full aspect-[96/11.29] pl-2  focus:outline-none focus:border-none placeholder:text-md max-sm:placeholder-transparent max-xl:placeholder:text-sm placeholder:font-semibold' placeholder='Search for products' />
					</div>
					<div className=''>
						<i className="fa-solid fa-magnifying-glass mt-1 text-green-700 "></i>
					</div>
				</div>
				<div>
					<div className='h-10 max-xl:h-8 border-2 border-green-100 pl-5 pr-5 max-lg:px-2 max-md:mr-7 max-sm:mr-0 rounded-md max-lg:rounded-sm flex gap-2 max-lg:gap-0 items-center cursor-pointer'>
						{/* location icon */}
						<i class="fa-solid fa-location-dot mt-0.5 text-green-600 "></i>
						<h1 className='text-xl font-medium max-lg:hidden text-green-950'>Location</h1>
					</div>
				</div>
			</div>

			</div>
			<div className='flex max-sm:w-fit max-sm:ml-auto max-sm:text-2xl max-sm:mt-5 max-sm:mr-1.5 max-sm:gap-4 items-center text-2xl gap-5 max-xl:gap-3 max-xl:text-xl text-green-800' >
				<div>
					<i class="fa-solid fa-heart cursor-pointer "></i>
				</div>
				<div className=''>
					<i class="fa-solid fa-user cursor-pointer"></i>
				</div>
				<div>
					<i class="fa-solid fa-bag-shopping cursor-pointer"></i>
				</div>
			</div>
		</div>

		{/* Navbar Menus */}
		<div className="w-10/12 max-lg:w-11/12 m-auto mt-5 mb-3.5">
  {/* Main container */}
  <div className="flex flex-wrap justify-between items-center gap-4 md:gap-8">
    {/* All Departments */}
    <div className="flex items-center gap-2 bg-green-700 px-4 py-2 rounded-lg text-white">
      <i className="fa-solid fa-grip text-md"></i>
      <h1 className="text-sm font-medium cursor-pointer whitespace-nowrap">All Departments</h1>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-wrap gap-4 md:gap-8 items-center justify-start md:justify-center w-full md:w-auto">
      {[
        'Home',
        'Shop',
        'Stores',
        'Mega menu',
        'Pages',
        'Account',
        'Dashboard',
        'Docs',
      ].map((label, i) => (
        <div key={i} className="flex items-center text-sm whitespace-nowrap">
          <h1>{label}</h1>
          {label !== 'Dashboard' && label !== 'Docs' && (
            <i className="ml-2 fa-solid fa-angle-down mt-0.5"></i>
          )}
        </div>
      ))}
    </div>
  </div>
</div>
    </div>
  )
}
