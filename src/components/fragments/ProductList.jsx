'use client'

import currency from '@/helper/currency'
import { increment } from '@/redux/slices/cart-counter.slice'
import { setCart } from '@/redux/slices/cart-list.slice'
import { sum } from '@/redux/slices/cart-sum.slice'
import React from 'react'
import { useDispatch } from 'react-redux'

export const ProductList = (props) => {
    const { children, category } = props

    return (
        <div className="mt-16">
            <h3 className="text-2xl font-medium text-gray-600">{category}</h3>
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {children}
            </div>
        </div>
    )
}

export const ProductCard = (props) => {
    const { image, name, price, id } = props
    const dispatch = useDispatch()

    return (
        <div className="w-full max-w-sm mx-auto overflow-hidden rounded-md shadow-md">
            <div
                className="flex items-end justify-end w-full h-56 bg-cover"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <button
                    className="p-2 mx-5 -mb-4 text-white bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                    onClick={() => {
                        dispatch(setCart({ id, qty: 1, name, price, image }))
                        dispatch(increment())
                        dispatch(sum(price))
                    }}
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </button>
            </div>
            <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">{name}</h3>
                <span className="mt-2 text-gray-500">{currency(price)}</span>
            </div>
        </div>
    )
}
