import React from 'react'
import NAVBAR from '../boiler-components/Nav'
import SMcard from '../boiler-components/SMcard'
import { Routes, Route } from "react-router-dom"
import Singleproduct from './Productpages/Singleproduct'

export default function Products() {
    
    return (
        <div>
            <NAVBAR />
            <div className='text-center'>
                <h1 className='selling'>Selling Product</h1>
            </div>
            <div>
                <SMcard />
                {/* <Routes>
                <Route path="/Singleproduct/:id" element={<Singleproduct />} />

                </Routes> */}
            </div>
        </div>
    )
}

