import React,{ReactElement, useEffect, useState} from 'react'
import HomeLayout from '../../layouts/HomeLayout'
import {SearchIcon} from '@heroicons/react/outline'
import ListHouseItem from '../../components/houseitem/ListHouseItem'
import Map from '../../components/map/Map'
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import GridHouseItem from '../../components/houseitem/GridHouseItem'

function index():ReactElement {
    const [view_mode, setToggleView] = useState<any>('')

    const toggle_list_mode = (e: any) =>{
        e.preventDefault()
        setToggleView("list")
        localStorage.setItem('view_mode', 'list')
    }

    const toggle_grid_mode = (e:any) =>{
        e.preventDefault()
        setToggleView('grid')
        localStorage.setItem('view_mode', 'grid')
    }

    const house_details =[
        {
            owner: 'Tatenda Bako',
            address:'Eastgate Centre, Robert Mugabe Rd, Harare, Zimbabwe',
            pictures : ['/house-1.jpg', '/house2b.jpg', '/furniture.png', '/home2.jpg', '/house3.jpg', '/chairs.jpg'],
            price: '1.500',
            rooms: '3',
            toilets: '4',
            area: '4sqrm',
            _id: 1,
            liked: true,
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere et blanditiis a fuga ex perferendis quidem eum earum accusamus excepturi. Modi adipisci amet doloremque ullam accusantium iure dolorem natus delectus!"
        },
        {
            owner: 'Tatenda Bako',
            address:'Eastgate Centre, Robert Mugabe Rd, Harare, Zimbabwe',
            pictures : [ '/house2b.png', '/furniture.jpg', '/home2.jpg', '/house3.jpg', '/chairs.jpg', '/house-1.jpg',],
            price: '1.500',
            rooms: '3',
            toilets: '4',
            area: '4sqrm',
            _id: 2,
            liked: false,
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere et blanditiis a fuga ex perferendis quidem eum earum accusamus excepturi. Modi adipisci amet doloremque ullam accusantium iure dolorem natus delectus!"
        },
        {
            owner: 'Tatenda Bako',
            address:'Eastgate Centre, Robert Mugabe Rd, Harare, Zimbabwe',
            pictures : [ '/house2b.png', '/furniture.jpg', '/home2.jpg', '/house3.jpg', '/chairs.jpg', '/house-1.jpg',],
            price: '1.500',
            rooms: '3',
            toilets: '4',
            area: '4sqrm',
            _id: 3,
            liked: false,
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere et blanditiis a fuga ex perferendis quidem eum earum accusamus excepturi. Modi adipisci amet doloremque ullam accusantium iure dolorem natus delectus!"
        }
    ]

    useEffect(()=>{
        view_mode === '' ? localStorage.setItem('view_mode', 'list') : localStorage.setItem('view_mode', view_mode)
        setToggleView(localStorage.getItem('view_mode'))
        console.log(view_mode)
    },[])

    return (
        <HomeLayout page_title="Buy a house">
            <div className="md:px-16 px-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-16 min-h-screen">
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
                                <div className="flex flex-row items-center mr-4">
                                   
                                    <span onClick={toggle_list_mode} className={`${view_mode=== "list" ? "text-blue-400" : "text-gray-400" } cursor-pointer  mr-2`}>
                                        <FormatListBulletedOutlinedIcon className="" fontSize="small" />
                                    </span>
                                    <span onClick={toggle_grid_mode} className={`${view_mode=== "grid" ? "text-blue-400" : "text-gray-400" } cursor-pointer  mr-2`}>
                                        <GridOnOutlinedIcon className="" fontSize="small"/>
                                    </span>
                                  
                                </div>
                                <p className="text-gray-400">Sort By:</p>
                                <p className="text-gray-700">Price</p>
                            </div>
                        </div>
                        <div className="houses">
                            
                            {
                                view_mode === "list" ? (
                                    <div className="flex flex-col">
                                        { house_details.map(house =>(
                                            <ListHouseItem
                                                key={house._id}
                                                owner={house.owner}
                                                address={house.address}
                                                pictures={house.pictures}
                                                price={house.price}
                                                rooms={house.rooms}
                                                toilets={house.toilets}
                                                area={house.toilets}
                                                id={house._id}
                                                liked={house.liked}
                                                details={house.details}
                                            />
                                        ))}
                                    </div>
                                ):(
                                    <div className="grid grid-cols-2 gap-8">
                                        {
                                             house_details.map(house =>(
                                                <GridHouseItem
                                                    key={house._id}
                                                    owner={house.owner}
                                                    address={house.address}
                                                    pictures={house.pictures}
                                                    price={house.price}
                                                    rooms={house.rooms}
                                                    toilets={house.toilets}
                                                    area={house.toilets}
                                                    id={house._id}
                                                    liked={house.liked}
                                                    details={house.details}
                                                />
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="md:flex hidden z-0 col-span-1 h-full w-full rounded-xl overflow-hidden">
                        <div className="rounded-xl overflow-hidden bg-gray-100">
                            <Map/>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default index
