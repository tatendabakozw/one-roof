import React, {ReactElement} from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function BigSearch():ReactElement {
    return (
        <div className="flex flex-col w-full cursor-pointer">
            <div className="flex">
                <p className="bg-gray-200 text-gray-700 py-2 px-8 ml-16 rounded-t-lg">Search</p>
            </div>
            <div className="z-40 w-full bg-white py-4 px-4 w-2/4 shadow-lg border-t border-gray-200 rounded-full flex flex-row items-center">
                <input 
                    type="text" 
                    placeholder="Enter an address, ZIP code, neighborhood, city or country" 
                    className="bg-white border-none outline-none w-full p-2 rounded-full placeholder-gray-500 text-gray-700 text-lg" 
                />
                <span className="bg-blue-900 hover:bg-blue-800 text-white p-4 rounded-full cursor-pointer ">
                    <SearchRoundedIcon />
                </span>
            </div>
        </div>
    )
}

export default BigSearch
