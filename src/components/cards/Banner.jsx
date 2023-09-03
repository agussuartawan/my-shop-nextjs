import React from 'react'

export const Banner = (props) => {
    const { image, title, description, btnLabel } = props
    return (
        <div
            className="h-64 overflow-hidden bg-center bg-cover rounded-md"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className="flex items-center h-full bg-gray-900 bg-opacity-50">
                <div className="max-w-xl px-10">
                    <h2 className="text-2xl font-semibold text-white">
                        {title}
                    </h2>
                    <p className="mt-2 text-gray-400">
                        {description.slice(0, 150)}...
                    </p>
                    <button className="flex items-center px-3 py-2 mt-4 text-sm font-medium text-white uppercase bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
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
