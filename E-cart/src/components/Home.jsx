import React from 'react'
import '../css/home.css'
import Banner_categories from './Homepage/Banner_categories'
import Popular_products from './Homepage/Popular_products'
import DailybestSales from './Homepage/DailybestSales'


export default function Home() {
    return (
        <div className=' w-11/12 max-lg:w-full m-auto Homepage'>
			<Banner_categories/>
			<Popular_products/>
			<DailybestSales/>
			
        </div>
    )
}
