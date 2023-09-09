import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';
import { error } from 'console';
import { useNavigate } from 'react-router-dom';
import  { useEffect } from 'react';

export default function SMcard() {
    const [product, setproduct] = useState<any>([])
    const [Description, setdescription] = useState<boolean[]>([])

    useEffect(() => {
      
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
            const data = response.data
            console.log(data)
            setproduct([...data])
            console.log(product)
        })
        .catch(error => {
            alert(error)
        })
      
    }, [])
     

    const showdescription = (index: number) => {
        const updatedDescription = [...Description];
        updatedDescription[index] = !updatedDescription[index];
        setdescription(updatedDescription);
        console.log(updatedDescription)
    }




    return (
        <div className='container-fluid'>
            <Row style={{ width: "100%" }} >
                {
                    product.map((x: any, i: any) => {
                        <Link to={`singlePost/${x.id}`} key={i} style={{ textDecoration: 'none', color: 'inherit' }}></Link>
                        return (
                            <Col lg={3} md={4} sm={6} xs={12} key={i} onClick={() => x.id}>
                                <div className="card mb-5 mycards" style={{height:"550px"}}>
                                    <div style={{height:"230px"}}>
                                        <Link to={`/singleProduct/${x.id}`}><img src={x.image} className="card-img-top p-2 pb-4" alt="..." style={{height:"100%"}} /></Link>
                                    </div>
                                    <div style={{height:"320px"}}>
                                    <div className="card-body">
                                        <h4 className="card-title mb-4 fs-6">{x.title}</h4>
                                        <button onClick={() => showdescription(i)} className='btn btn-danger'>Description</button>
                                        {Description[i] && (
                                            <p className="card-text fs-6">{x.description}</p>
                                        )}
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item fs-3">RS : {x.price}</li>
                                        <li className="list-group-item fs-6">Rating : {x.rating.rate}</li>
                                    </ul>
                                    <div className="card-body ">
                                        <button className='btn btn-danger mb-3'> <NavLink className="nav-link " aria-current="page" to=''>
                                            Add Cart
                                        </NavLink></button>
                                    </div>
                                    </div>
                                </div>
                            </Col>
                        )

                    })
                }
            </Row>
        </div>
    )
}

