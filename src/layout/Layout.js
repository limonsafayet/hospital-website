import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function Layout({ children }) {
    return (
        <>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}

export default Layout
