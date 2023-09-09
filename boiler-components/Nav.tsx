import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuIcon from '@mui/icons-material/Menu';
// import { NavLink } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
function NAVBAR() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Check the screen width and set isMobile accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    // Initial check and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderMobileNav = () => {
    return (
      <div className='displayNav'>
        <Button variant="primary" onClick={handleShow}>
          Menu <MenuIcon /> {/* Include the MenuIcon properly */}
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ color: "blueviolet" }}>Ecommerce App</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul>
            <li className="nav-item" style={{ marginBottom: "20px", color: "red", listStyle: "none" }}>
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li style={{ marginBottom: "20px", color: "red", listStyle: "none" }}>
               <NavLink to="/Products" className="nav-link">Products </NavLink> </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg_color" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{color:"white",fontSize:"36px",fontFamily:"fantasy",fontWeight:"bold"}}>
            Ecommerce App
          </a>
          {isMobile ? (
            renderMobileNav()
          ) : (
            <div className="d-flex flex-row justify-content-end align-items-center">
              <ul className="navbar-nav" >
                <li className="nav-item" style={{ paddingRight: "35px" }}>
                  <NavLink className="nav-link active" aria-current="page"  style={{color:"white"}} to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item" style={{ paddingRight: "35px" }}>
                  <NavLink className="nav-link"  style={{color:"white"}} to="/Products">
                    Products
                  </NavLink>
                </li>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-white" type="submit">Search</button>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default NAVBAR;

