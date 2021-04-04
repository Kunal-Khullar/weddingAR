import React from 'react'
import Demo from './demo/Demo'
import Working from './working/Working'
import Product from './product/Product'
import Navibar from './navbar/Navbar'
import Contact from './contact/Contact'
const Home = () => {
    return (
        <div>
            <Navibar></Navibar>
            <Product></Product>
            <Working></Working>
            <Demo></Demo>
            <Contact />
        </div>
    )
}

export default Home
