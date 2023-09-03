import React from 'react'
import { useSelector } from 'react-redux'

export const IconWithBadge = (props) => {
    const { children } = props
    const value = useSelector((state) => state.countCart.value)
    return (
        <div className="relative inline-flex items-center p-3 text-center">
            {children}
            <span className="sr-only">Icon</span>
            {value > 0 && (
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-black rounded-full border-1 -top-0 -right-0">
                    {value}
                </div>
            )}
        </div>
    )
}
