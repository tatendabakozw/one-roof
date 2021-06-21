import React,{ReactElement} from 'react'
import HomeLayout from '../../layouts/HomeLayout'
import {SearchIcon} from '@heroicons/react/outline'

function index():ReactElement {
    return (
        <HomeLayout page_title="Buy a house">
            <div className="px-8">
                <div className="grid grid-cols-2 gap-8 min-h-screen">
                    <div className="col-span-1 h-full w-full rounded-xl flex flex-col">
                    <p className="text-gray-500 mb-4">10 results</p>
                        <div className="input border border-gray-300 w-full rounded-full flex flex-row items-center bg-white overflow-hidden">
                            <input type="text" 
                                className="bg-none border-none outline-none text-lg flex-grow p-4 bg-white rounded-full" 
                                placeholder="School, Zip Code, Neighborhood, City" />
                            <span className="bg-blue-900 p-5">
                                <SearchIcon width={20} height={20} className="text-white" />
                            </span>
                        </div>
                    </div>
                    <div className="col-span-1 bg-blue-600 h-full w-full rounded-xl">
                        
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default index
