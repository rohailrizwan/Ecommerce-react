import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom"
import { Row, Col } from 'react-bootstrap'
// import image from '../images/laptop.jpeg'
import NAVBAR from "../../boiler-components/Nav";

import React, { useEffect } from 'react';
export default function Singleproduct() {
  let params = useParams();

  const [product, setproduct] = useState<any>({});
  const [Description, setdescription] = useState<boolean[]>([])

  useEffect(() => {
    // Fetch product data by ID from the API
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setproduct({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const showdescription = (index: number) => {
    const updatedDescription = [...Description];
    updatedDescription[index] = !updatedDescription[index];
    setdescription(updatedDescription);
    console.log(updatedDescription)
  }
  return (
    <>
      <div>
        <NAVBAR />
      </div>
      <div className="text-center text-danger py-5">
       <h1> Your Product</h1>
      </div>
      <div className="container">
        <Col lg={3} md={4} sm={6} xs={12} key={product.id}>
          <div className="card mb-5 mycards">
            <div>
              <img src={product.image} className="card-img-top p-2 pb-4" alt="..." />
            </div>
        
            <div className="card-body">
              <h4 className="card-title mb-4 fs-6">{product.title}</h4>
              <button onClick={() => showdescription(product.id)} className='btn btn-danger'>Description</button>
              {Description[product.id] && (
                <p className="card-text fs-6">{product.description}</p>
              )}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item fs-3">RS : {product.price}</li>
              {
                product.rating && (
                  <li className="list-group-item fs-6">Rating : {product.rating.rate}</li>
                )
              }

            </ul>
            <div className="card-body">
              <button className='btn btn-danger'> <NavLink className="nav-link" aria-current="page" to=''>
                Add Cart
              </NavLink></button>
            </div>
          </div>
        </Col>
      </div>

    </>
  );
}
