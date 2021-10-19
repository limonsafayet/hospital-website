import React from 'react'
import Navbar from '../components/Navbar/Navbar'

function Layout({ children }) {
    return (
        <>
            <Navbar></Navbar>
            <main>{children}</main>
        </>
    )
}

export default Layout
