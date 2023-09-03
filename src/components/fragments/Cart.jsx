'use client'

import Image from 'next/image'
import { Button } from '../buttons/Button'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { hideCart } from '@/redux/slices/cart.slice'
import { H1 } from '../texts/H1'
import currency from '@/helper/currency'

export const Cart = () => {
    const visible = useSelector((state) => state.showCart.value)
    const carts = useSelector((state) => state.carts.value)
    const total = useSelector((state) => state.totalCart.value)
    const dispacth = useDispatch()

    return (
        <div
            className={`fixed ${
                visible ? 'translate-x-0' : 'translate-x-full'
            } ease-in-out top-0 right-0 w-full h-full max-w-xs px-6 py-4 overflow-y-auto transition duration-300 transform bg-white border-l-2 border-gray-300`}
        >
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium text-gray-700">
                    Your cart
                </h3>
                <button
                    className="text-gray-600 focus:outline-none"
                    onClick={() => dispacth(hideCart())}
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
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <hr className="my-3" />
            {carts.length > 0 &&
                carts.map((cart, index) => (
                    <CartList
                        image={cart.image}
                        title={cart.name}
                        price={currency(cart.price)}
                        qty={cart.qty}
                        key={index}
                        id={cart.id}
                    />
                ))}
            <hr className="my-3" />
            <div className="mt-6">
                <div className="flex justify-between">
                    <H1>Total</H1>
                    <H1>{currency(total)}</H1>
                </div>
            </div>
            <div className="mt-8">
                <form className="flex items-center justify-center">
                    <input
                        className="w-48 focus:outline-none form-input"
                        type="text"
                        placeholder="Add promocode"
                    />
                    <Button>
                        <span>Apply</span>
                    </Button>
                </form>
            </div>
            <div className="mt-2">
                <Button className="w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <span className="mr-2">Chechout</span>
                    <FaArrowRightLong />
                </Button>
            </div>
        </div>
    )
}

export const CartList = (props) => {
    const { image, title, price, qty, id } = props
    return (
        <div className="mt-6">
            <div className="flex">
                <Image
                    className="object-cover w-20 h-20 rounded"
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                />
                <div className="mx-3">
                    <h3 className="text-sm font-bold text-gray-600">{title}</h3>
                    <span className="text-sm text-gray-600">{price}</span>

                    <div className="flex items-center mt-2">
                        <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <span className="mx-2 text-gray-700">{qty}</span>
                        <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
