import React, { Component } from "react";
import ReactDOM from "react-dom";
import { useTranslation, Trans } from "react-i18next";
import {Dropdown,DropdownButton} from 'react-bootstrap';
import 'react-dropdown/style.css';
import './App.css'
 import About from "./Pages/About/About";
 import Home from "./Pages/HomePage/HomePage";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiSolidBinoculars } from 'react-icons/bi';
import india from '../src/images/india.png'
import unitedkingdom from '../src/images/united-kingdom.png'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import {TbLanguageHiragana} from 'react-icons/tb'


const AppNavbar = ()=> {

  const { t, i18n } = useTranslation(); 
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };



  return (
    <Navbar expand="lg" className= "bg-success">
      <Container>
        <Navbar.Brand href="/" className="text-light"> <BiSolidBinoculars /> Tourism</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-light">
            <Nav.Link href="/"  className="text-light">Home</Nav.Link>
            <Nav.Link href="about"  className="text-light">About</Nav.Link>
            <NavDropdown className="text-light" title= {<TbLanguageHiragana  className="text-light"/>} id="basic-nav-dropdown">
            <NavDropdown.Item   onClick={() => changeLanguage("en")}>
            <img src={unitedkingdom} className="flag"/>  English
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={() => changeLanguage("hi")}> <img src={india} className="flag"/> हिंदी</NavDropdown.Item>
              <NavDropdown.Item  onClick={() => changeLanguage("tl")}> <img src={india} className="flag"/> తెలుగు</NavDropdown.Item>       
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default function App() {
  
  const { t, i18n } = useTranslation();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
         <Home/>
        </div>
      ),
    },
    {
      path: "about",
      element: <div><About/></div>,
    },
  ]);
  


  return (
    <div className="App">
     <AppNavbar/>
     <RouterProvider router={router} />
    </div>
  );
}
