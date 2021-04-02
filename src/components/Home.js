import React from 'react'
import Demo from './demo/Demo'
import Working from './working/Working'
import Product from './product/Product'
import Navibar from './navbar/Navbar'
const Home = () => {
    return (
        <div>
            <Navibar></Navibar>
            <Product></Product>
            <Working></Working>
            <Demo></Demo>
        </div>
    )
}

export default Home
