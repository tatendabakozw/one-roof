import React, {ReactElement} from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

interface Props {
    isShowing? : boolean
}

function HomeSearch(props: Props):ReactElement {
    return (
        <div className={` ${props.isShowing ? 'flex' : 'hidden'} bg-gray-100 py-2 px-4 rounded-full w-full`}>
            <input type="text" className="border-none bg-gray-100 outline-none" placeholder="search" />
            <span  className={` items-center lg:text-blue-900 mr-2 cursor-pointer hover:bg-gray-100 rounded-full text-blue-900`}>
                <SearchRoundedIcon fontSize="small"/>
            </span>
        </div>
    )
}

export default HomeSearch
