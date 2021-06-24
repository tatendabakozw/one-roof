import React, {ReactElement, useState} from 'react'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import LocalHotelRoundedIcon from '@material-ui/icons/LocalHotelRounded';
import BathtubRoundedIcon from '@material-ui/icons/BathtubRounded';
import AspectRatioRoundedIcon from '@material-ui/icons/AspectRatioRounded';

interface Props{
    owner?: string,
    address?: string,
    picture?: string,
    price?: string,
    rooms?: string,
    toilets?: string,
    area?: string,
    id?: number
}

function BuyHouseItem({owner, address, picture, price, rooms, toilets, area, id}:Props):ReactElement {

    const [liked, setLiked] = useState(true)

    return (
        <div className="bg-white hover:shadow-lg w-full rounded-xl h-52 cursor-pointer p-4 grid grid-cols-5 gap-8 mb-8 transition duration-100 transform hover:scale-105">
            <div className="col-span-2 rounded-xl w-full h-full"
                style={{
                    backgroundImage: `url(${picture})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            ></div>
            <div className="col-span-3 flex flex-col overflow-ellipsis">
                <p className="text-gray-400 text-sm mb-2">{owner}</p>
                <p className="text-gray-700 text-xl mb-8 truncate">{address}</p>
                <p className="text-gray-500"><span className="text-gray-700 font-semibold text-lg mb-8">${price}</span> / year</p>

                <div className="flex flex-row items-center mt-4">
                <div className="deta flex flex-row justify-start text-gray-500">
                    <span className="mr-2 flex flex-row items-center ">
                        <span className="mr-2 bg-gray-100 p-1 rounded-full"><LocalHotelRoundedIcon fontSize="small" /></span>
                        <p>{toilets}</p>
                    </span>
                    <span className="mr-2 flex flex-row items-center ">
                        <span className="mr-2 bg-gray-100 p-1 rounded-full"><BathtubRoundedIcon fontSize="small" /></span>
                        <p>{rooms}</p>
                    </span>
                    <span className="mr-2 flex flex-row items-center ">
                        <span className="mr-2 bg-gray-100 p-1 rounded-full"><AspectRatioRoundedIcon fontSize="small" /></span>
                        <p>{area} sqrm</p>
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
            </div>
        </div>
    )
}

export default BuyHouseItem
