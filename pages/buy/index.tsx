import React,{ReactElement} from 'react'
import HomeLayout from '../../layouts/HomeLayout'
import {SearchIcon} from '@heroicons/react/outline'
import BuyHouseItem from '../../components/houseitem/BuyHouseItem'
import Map from '../../components/map/Map'

function index():ReactElement {

    const house_details =[
        {
            owner: 'Tatenda Bako',
            address:'Eastgate Centre, Robert Mugabe Rd, Harare, Zimbabwe',
            picture : '/furniture.jpg',
            price: '1.500',
            rooms: '3',
            toilets: '4',
            area: '4sqrm',
            _id: 1
        },
        {
            owner: 'Tatenda Bako',
            address:'Eastgate Centre, Robert Mugabe Rd, Harare, Zimbabwe',
            picture : '/furniture.jpg',
            price: '1.500',
            rooms: '3',
            toilets: '4',
            area: '4sqrm',
            _id: 2
        }
    ]

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
                            <span className="bg-blue-900 p-5 cursor-pointer rounded-r-full hover:bg-blue-800">
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

                                    <BuyHouseItem
                                        owner={'house.owner'}
                                        address={'house.address'}
                                        picture={'/home2.jpg'}
                                        price={'house.price'}
                                        rooms={'house.rooms'}
                                        toilets={'house.toilets'}
                                        area={'house.toilets'}
                                        id={1}
                                    />
                            
                            {
                                house_details.map(house =>{
                                    <BuyHouseItem
                                        owner={house.owner}
                                        address={house.address}
                                        picture={house.picture}
                                        price={house.price}
                                        rooms={house.rooms}
                                        toilets={house.toilets}
                                        area={house.toilets}
                                        id={house._id}
                                    />
                                })
                            }
                        </div>
                    </div>
                    <div className="relative z-0 col-span-1 h-full w-full rounded-xl overflow-hidden">
                        <div className="fixed rounded-xl overflow-hidden">
                            <Map/>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default index
