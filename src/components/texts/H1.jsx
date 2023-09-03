import React from 'react'

export const H1 = (props) => {
    const { children } = props
    return <h3 className="text-xl font-medium text-gray-700">{children}</h3>
}
