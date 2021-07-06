import React from 'react'

interface Props{
    className?: any,
    icon?:any,
    detail: string,
    iconStyle?:any
}

const DetailComponent = ({ className, icon, detail, iconStyle }:Props) => {
    return (
        <div className={`${className} flex flex-col border-2 border-gray-200 rounded-lg p-3`}>
            <div className="flex">
            <div className={`${iconStyle} text-gray-400 p-1 rounded-full`}>
                {(icon)}
            </div>
            </div>
            <div className="text">
                <p className="mt-4 text-gray-800 font-semibold text-sm">{detail}</p>
            </div>
        </div>
    )
}

export default DetailComponent
