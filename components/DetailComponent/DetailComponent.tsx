import React from 'react'

interface Props{
    className?: any,
    icon?:any,
    detail: string
}

const DetailComponent = ({ className, icon, detail }:Props) => {
    return (
        <div className={`${className} flex flex-col border-2 border-gray-200 rounded-lg p-3`}>
            <div className="text-gray-400">
                {(icon)}
            </div>
            <div className="text">
                <p className="mt-4 text-gray-800 font-semibold text-sm">{detail}</p>
            </div>
        </div>
    )
}

export default DetailComponent
