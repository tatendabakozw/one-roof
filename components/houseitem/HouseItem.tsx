import React, {ReactElement, useState} from 'react'
import {LocationMarkerIcon} from '@heroicons/react/outline'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import LocalHotelRoundedIcon from '@material-ui/icons/LocalHotelRounded';
import BathtubRoundedIcon from '@material-ui/icons/BathtubRounded';
import AspectRatioRoundedIcon from '@material-ui/icons/AspectRatioRounded';


function HouseItem():ReactElement {
    const [liked, setLiked] = useState(true)
    return (
        <div className="flex flex-col rounded-lg overflow-hidden shadow transition duration-100 transform hover:scale-105">
            <div className="img overflow-hidden h-52" style={{
                backgroundImage : "url('/house-1.jpg')",
                backgroundSize: 'cover'
            }}/>
            <div className="flex flex-row items-center py-2 px-4">
                <div className="deta flex flex-row justify-start text-gray-500">
                    <span className="mr-2 flex flex-row items-center ">
                        <span className="mr-2 bg-gray-100 p-1 rounded-full"><LocalHotelRoundedIcon fontSize="small" /></span>
                        <p>3</p>
                    </span>
                    <span className="mr-2 flex flex-row items-center ">
                        <span className="mr-2 bg-gray-100 p-1 rounded-full"><BathtubRoundedIcon fontSize="small" /></span>
                        <p>2</p>
                    </span>
                    <span className="mr-2 flex flex-row items-center ">
                        <span className="mr-2 bg-gray-100 p-1 rounded-full"><AspectRatioRoundedIcon fontSize="small" /></span>
                        <p>3 sqrm</p>
                    </span>
                </div>
                <div className="flex-grow"></div>
                <div className="lik flex">
                    {
                        liked ? (<span className="flex rounded-full cursor-pointer text-pink-600 mr-4 hover:text-pink-800">
                                <FavoriteRoundedIcon fontSize="small"/>
                            </span>):(
                                <span className="flex rounded-full cursor-pointer text-pink-600 mr-4 hover:text-pink-800">
                                <FavoriteBorderRoundedIcon fontSize="small"/>
                            </span>
                    )
                    }
                </div>
            </div>
            <span className="p-2 flex flex-row items-center overflow-ellipsis">
                <LocationMarkerIcon height={20} width={20} className="text-gray-400 mr-4" />
                <p className="text-gray-500 truncate">15002 Zengeza 3 extesnion chitungwiza harare</p>
            </span>
        </div>
    )
}

export default HouseItem
