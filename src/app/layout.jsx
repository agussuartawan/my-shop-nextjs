'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import store from './store'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    return (
        <Provider store={store}>
            <html lang="en">
                <body className={inter.className}>{children}</body>
            </html>
        </Provider>
    )
}
