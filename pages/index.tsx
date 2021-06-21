import HomeLayout from '../layouts/HomeLayout'
import Image from 'next/image'
import profilePic from '../public/house3.png'
import BigSearch from '../components/search/BigSearch'
import {HomeIcon, CashIcon, PresentationChartBarIcon, ChevronRightIcon} from '@heroicons/react/outline'
import HouseItem from '../components/houseitem/HouseItem'

export default function Home() {
  return (
    <HomeLayout page_title='Home' page_description="One roof market real-estate platform home page">
      <div className="container items-center mx-auto">
        <div className="absolute right-0 bottom-0 z-10">
          <div className="flex flex-row">
            <div className="w-1/2"></div>
            <Image src={profilePic} className="w-2/3 z-0" alt="Picture of the author" />
          </div>
        </div>
        <div className="min-h-screen flex container">
          <div className="flex md:m-auto p-8 flex-col z-40">
            <p className="lg:text-6xl md:text-4xl text-2xl font-semibold text-blue-900 md:w-2/5 w-4/5 mb-2">Vacations and your home is just a one roof market</p>
            <p className="text-gray-700 text-sm mb-8 md:w-2/5 w-4/5">Real estate is an imperishable asset, ever increasing in value. It is the most solid security that human ingenuity has devised. 
              It is the basis of all security and about the only indestructible security.</p>
            <>
              <BigSearch/>
            </>
          </div>
        </div>
        <div className="min-h-screen mt-16 flex flex-col items-center px-4">
          <div className="self-center flex h-full flex-col my-auto">
            <p className="text-gray-500 uppercase self-center text-center text-lg mb-2">our services</p>
            <div className="w-14 border-b-2 border-blue-900 self-center mb-16"></div>
            <p className="text-4xl md:w-2/3 w-full font-semibold self-center text-center text-gray-700 mb-24">We have a variety of listings and constant updates. 
              So you'll never miss out
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-16 mb-16">
                <div className="col-span-1 p-8 rounded-lg shadow transition duration-100 transform hover:scale-105 cursor-pointer hover:shadow-xl">
                  <div className="flex">
                    <span className="bg-yellow-200 p-2 rounded-lg">
                      <HomeIcon height={32} width={32} className="text-yellow-400 rounded-lg " />
                    </span>
                  </div>
                  <p className="text-gray-700 font-semibold text-lg my-8">Buy a home</p>
                  <p className="text-gray-500 w-4/5">Find your place with an immersive photo experience and the most listings, including places you wont find anywhere</p>
                </div>
                <div className="col-span-1 p-8 rounded-lg shadow transition duration-100 transform hover:scale-105 cursor-pointer hover:shadow-xl">
                  <div className="flex">
                    <span className="bg-indigo-200 p-2 rounded-lg">
                      <CashIcon height={32} width={32} className="text-indigo-400 rounded-lg" />
                    </span>
                  </div>
                  <p className="text-gray-700 font-semibold text-lg my-8">Sell a home</p>
                  <p className="text-gray-500 w-4/5">
                    Whether you sell with new One Roof Market or take another approach, we'll help you navigate the path to a successful sale.
                  </p>
                </div>
                <div className="col-span-1 p-8 rounded-lg shadow transition duration-100 transform hover:scale-105 cursor-pointer hover:shadow-xl">
                  <div className="flex">
                    <span className="bg-green-200 p-2 rounded-lg">
                      <PresentationChartBarIcon height={32} width={32} className="text-green-400 rounded-lg" />
                    </span>
                  </div>
                  <p className="text-gray-700 font-semibold text-lg my-8">Rent a home</p>
                  <p className="text-gray-500 w-4/5">
                    We are creating a seemless online experience - from shopping on the largest rental network, to applying the hard rent 
                  </p>
                </div>
            </div>
          </div>
        </div>

        <div className="min-h-screen flex flex-col items-center overflow-hidden">
          <div className="banner md:h-full h-[150] w-full my-auto rounded-2xl p-2 flex flex-col overflow-hidden" style={{
              backgroundImage: "url('/banner.jpg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }} >
             <div className="self-end flex flex-col bg-white shadow-lg right-32 md:w-1/3 w-full rounded-2xl p-16 md:h-2/3 h-full">
                <p className="w-2/3 text-gray-700 text-2xl font-semibold mb-8">Find a home just right for you</p>
                <p className="text-gray-500 mb-32"> One Roof Market shows you a lot of houses near you. See homes on the market, or get a sneak peak at those that have yet to reach the market </p>
                <div className="flex-grow flex-1"></div>
                <div className="discover">
                  <div className="flex flex-row items-center w-full">
                    <div className=" nox p-2 border-2 border-gray-300 rounded-lg">
                      <p className="text-gray-400">1/4</p>
                    </div>
                    <p className="text-gray-500 ml-2 capitalize">discover houses</p>
                    <div className="flex-grow flex-1"></div>
                    <span className="flex-end text-right text-blue-900 cursor-pointer hover:text-blue-800 flex flex-row items-center rounded-lg p-2 hover:bg-gray-100">
                      Next
                      <ChevronRightIcon height={16} width={16} className="text-blue-800 rounded-lg" />
                    </span>
                  </div>
                </div>
              </div>
          </div>
         
          </div>

          <div className="new_listings min-h-screen flex flex-col px-4">
          <p className="text-gray-500 uppercase self-center text-center text-lg mb-2">featured properties</p>
            <div className="w-14 border-b-2 border-blue-900 self-center mb-16"></div>
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="col-span-1">
                  <HouseItem/>
                </div>
                <div className="col-span-1">
                  <HouseItem/>
                </div>
                <div className="col-span-1">
                  <HouseItem/>
                </div>
                <div className="col-span-1">
                  <HouseItem/>
                </div>
              </div>
            </>
          </div>

      </div>
    </HomeLayout>
  )
}
