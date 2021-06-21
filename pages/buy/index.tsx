import React,{ReactElement} from 'react'
import HomeLayout from '../../layouts/HomeLayout'
import {SearchIcon} from '@heroicons/react/outline'
import BuyHouseItem from '../../components/houseitem/BuyHouseItem'
import Map from '../../components/map/Map'

function index():ReactElement {
    return (
        <HomeLayout page_title="Buy a house">
            <div className="px-16">
                <div className="grid grid-cols-2 gap-16 min-h-screen">
                    <div className="col-span-1 h-full w-full rounded-xl flex flex-col">
                        <p className="text-gray-500 mb-4">10 results</p>
                        <div className="input border border-gray-300 w-full rounded-full flex flex-row items-center bg-white overflow-hidden mb-8">
                            <input type="text" 
                                className="bg-none border-none outline-none text-lg flex-grow p-4 bg-white rounded-full" 
                                placeholder="School, Zip Code, Neighborhood, City" />
                            <span className="bg-blue-900 p-6 cursor-pointer hover:bg-blue-800">
                                <SearchIcon width={20} height={20} className="text-white" />
                            </span>
                        </div>
                        <div className="filter flex flex-row items-center border-gray-200 mb-8">
                            <div className="p-2 border border-gray-300 rounded-full mr-2">
                                <p className="text-gray-500 font-semibold">Any Price</p>
                            </div>
                            <div className="p-2 border border-gray-300 rounded-full mr-2">
                                <p className="text-gray-500 font-semibold">London</p>
                            </div>
                            <div className="flex-grow"></div>
                            <div className="option flex flex-row items-center">
                                <p className="text-gray-400">Sort By:</p>
                                <p className="text-gray-700">Price</p>
                            </div>
                        </div>
                        <div className="houses">
                            <BuyHouseItem/>
                            <BuyHouseItem/>
                            <BuyHouseItem/>
                        </div>
                    </div>
                    <div className="col-span-1 h-full w-full rounded-xl overflow-hidden">
                        <Map/>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default index
