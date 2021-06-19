import React, {ReactElement} from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function HomeSearch():ReactElement {
    return (
        <div className={`bg-gray-100 p-1 rounded-full w-full`}>
            <input type="text" className="border-none bg-gray-100 outline-none p-2 rounded-full" placeholder="search" />
            <span  className={` items-center lg:bg-blue-900 mr-2 cursor-pointer p-2 hover:bg-blue-800 rounded-full text-white`}>
                <SearchRoundedIcon fontSize="small"/>
            </span>
        </div>
    )
}

export default HomeSearch
