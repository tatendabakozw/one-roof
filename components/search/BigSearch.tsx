import React, {ReactElement} from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function BigSearch():ReactElement {
    return (
        <div className="flex flex-col cursor-pointer">
            <div className="flex">
                <p className="bg-gray-200 text-gray-700 py-2 md:px-8 px-4 md:ml-16 ml-8 rounded-t-lg">Search</p>
            </div>
            <div className="z-40 bg-white md:py-4 py-2 px-2 md:px-4 md:w-2/4 w-full shadow-lg border-t border-gray-200 rounded-full flex flex-row items-center">
                <input 
                    type="text" 
                    placeholder="Enter an address, ZIP code, neighborhood, city or country" 
                    className="bg-white border-none outline-none w-full p-2 rounded-full placeholder-gray-500 text-gray-700 md:text-lg text-sm" 
                />
                <span className="bg-blue-900 hover:bg-blue-800 text-white md:p-4 p-2 rounded-full cursor-pointer ">
                    <SearchRoundedIcon />
                </span>
            </div>
        </div>
    )
}

export default BigSearch
