import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


export default function Footer() {
  return (
    <div>
    <footer className="bg-gray-100 py-10 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 border-b border-gray-300 pb-8">
          {/* Categories */}
          <div className="col-span-2">
            <h4 className="font-semibold mb-4 text-black">Categories</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                'Vegetables & Fruits', 'Dairy, bread & eggs',
                'Breakfast & instant food', 'Cold drinks & juices',
                'Bakery & Biscuits', 'Tea, coffee & drinks',
                'Atta, rice & dal', 'Masala, oil & more',
                'Sauces & spreads', 'Chicken, meat & fish',
                'Organic & gourmet', 'Paan corner',
                'Baby care', 'Pharma & wellness',
                'Cleaning essentials', 'Home & office',
                'Personal care', 'Pet care'
              ].map((item, index) => (
                <p key={index} className="hover:text-black cursor-pointer">{item}</p>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Get to know us',
              links: ['Company', 'About', 'Blog', 'Help Center', 'Our Value']
            },
            {
              title: 'For Consumers',
              links: ['Payments', 'Shipping', 'Product Returns', 'FAQ', 'Shop Checkout']
            },
            {
              title: 'Become a Shopper',
              links: ['Shopper Opportunities', 'Become a Shopper', 'Earnings', 'Ideas & Guides', 'New Retailers']
            },
            {
              title: 'Freshcart programs',
              links: ['Freshcart programs', 'Gift Cards', 'Promos & Coupons', 'Freshcart Ads', 'Careers']
            }
          ].map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-black">{section.title}</h4>
              {section.links.map((link, i) => (
                <p key={i} className="hover:text-black cursor-pointer">{link}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4 text-sm">
          {/* Payment Partners */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Payment Partners:</span>
            <img src="https://th.bing.com/th/id/OIP.mgJRD1e6YWifvgZjNodfdwHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="Amazon Pay" className="h-4" />
            <img src="https://millennialmoney.com/wp-content/uploads/2020/02/american-express-logo.jpg" alt="Amazon Pay" className="h-4" />
            <img src="https://th.bing.com/th/id/OIP.X2o257HpNW7ME1yYHcU2QwHaHw?rs=1&pid=ImgDetMain" alt="Rupay" className="h-4" />
            <img src="https://th.bing.com/th/id/OIP.e1DAjr64p70tGJHkpUFZtwHaEK?w=288&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="PayPal" className="h-4" />
            <img src="https://ts2.mm.bing.net/th?id=OIP.vRQZ8vcw73umQSZ0Pg45HgHaFj&pid=15.1" alt="PayPal" className="h-4" />
            <img src="https://pngimg.com/uploads/visa/visa_PNG4.png" alt="Visa" className="h-4" />
          </div>

          {/* App Buttons */}
          <div className="flex gap-3">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <span className="font-medium">Follow us on</span>
            <FaFacebookF className="cursor-pointer hover:text-black"/>
            <FaTwitter className="cursor-pointer hover:text-black"/>
            <FaInstagram className="cursor-pointer hover:text-black"/>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-xs">
          © 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved. Powered by <span className="text-green-600">Codescandy.</span>
        </div>
      </div>
    </footer>
     </div>
  )
}
