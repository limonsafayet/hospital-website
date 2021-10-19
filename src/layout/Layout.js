import React from 'react'
import Navbar from '../components/Shared/Navbar/Navbar'

function Layout({ children }) {
    return (
        <>
            <Navbar></Navbar>
            <main>{children}</main>
        </>
    )
}

export default Layout
