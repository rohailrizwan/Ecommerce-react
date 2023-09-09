import React from 'react';
import NAVBAR from '../boiler-components/Nav';
import { Button } from '@mui/material';
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="background-image"></div>
      <div className="navbar-container">
        <NAVBAR />
        <div style={{ paddingTop: "150px" }} className='text-center'>
          <h1 className=' text-white pb-5'>Welcome to Ecommerce website</h1>
          <Button> <NavLink to="/Products" className='p-4 text-white bg-danger' style={{textDecoration:"none",borderRadius:"5px"}}> Buy products</NavLink> </Button>
        </div>
      </div>
    </>
  );
}

