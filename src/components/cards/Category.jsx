import React from 'react'

export const Category = (props) => {
    const { image, description, btnLabel, category } = props
    return (
        <div
            className="w-full h-64 mt-8 overflow-hidden bg-center bg-cover rounded-md md:mx-4 md:mt-0 md:w-1/2"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className="flex items-center h-full bg-gray-900 bg-opacity-50">
                <div className="max-w-xl px-10">
                    <h2 className="text-2xl font-semibold text-white">
                        {category}
                    </h2>
                    <p className="mt-2 text-gray-400">
                        {description.slice(0, 150)}...
                    </p>
                    <button className="flex items-center mt-4 text-sm font-medium text-white uppercase rounded hover:underline focus:outline-none">
                        <span>{btnLabel}</span>
                        <svg
                            className="w-5 h-5 mx-2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
