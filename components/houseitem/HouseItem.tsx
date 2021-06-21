import React, {ReactElement} from 'react'
import house1 from '../../public/house-1.jpg'
import image2 from '../../public/furniture.jpg'
import Image from 'next/image'
import {LocationMarkerIcon} from '@heroicons/react/outline'

function HouseItem():ReactElement {
    return (
        // <div className="flex flex-col rounded-lg overflow-hidden shadow">
        //     <div className="img overflow-hidden">
        //         <Image src={house1} width={400} height={250} />
        //     </div>
        //     <div className="deta p-2 flex flex-row justify-start text-gray-500">
        //         <p className="mr-2">3bed</p>
        //         <p className="mr-2">2 bath</p>
        //         <p className="mr-2">200 sqrm</p>
        //     </div>
        //     <span className="p-2 flex flex-row items-center">
        //         <LocationMarkerIcon height={16} width={16} className="text-gray-400 mr-4" />
        //         <p>15002 Zengeza 3 extesnion chitungwiza harare</p>
        //     </span>
        // </div>
        <div className="conaa relative flex-col flex items-center">
            <div className="absolute rounded-2xl h-52 w-96">
                <Image src={house1} layout="fill" className="rounded-xl" />
            </div>
            <div className="absolute p-2 bg-blue-900 z-30 mt-48 left-12 rounded-md">
                <p className="text-white text-sm">3 new offers</p>
            </div>
            <div className="absolute z-30 mt-44 h-12 w-12 right-12 border border-white rounded-lg overflow-hidden">
                <Image src={image2} layout="fill" className="rounded-md" />
            </div>
            <div className="absolute z-30 mt-44 h-12 w-12 right-28 border border-white rounded-lg overflow-hidden">
                <Image src={image2} layout="fill" className="rounded-md" />
            </div>
            <div className="bg-white shadow p-8 mt-36 h-56 w-[30rem] rounded-2xl">
                
            </div>
        </div>
    )
}

export default HouseItem
