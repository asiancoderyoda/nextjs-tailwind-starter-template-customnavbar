import Link from "next/link";

import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BorderAllIcon from '@material-ui/icons/BorderAll';



export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav style={{top:"0", position:"sticky",  zIndex:"999"}} className="relative flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="http://localhost:3000/">
            <a onClick={() => setNavbarOpen(!navbarOpen)}
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              
            >
              Reusable Tailwind Navbar
            </a>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuIcon/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li onClick={() => setNavbarOpen(!navbarOpen)} className="nav-item">
              <Link href="http://localhost:3000/products">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  
                >
                  <BorderAllIcon style={{fontSize:"24px"}} /><span className="ml-2">Products</span>
                </a>
                </Link>
              </li>
              <li onClick={() => setNavbarOpen(!navbarOpen)} className="nav-item">
                <Link href="http://localhost:3000/register">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <LockOpenIcon style={{fontSize:"24px"}} /><span className="ml-2">Register</span>
                </a>
                </Link>
              </li>
              <li onClick={() => setNavbarOpen(!navbarOpen)} className="nav-item">
                <Link href="http://localhost:3000/login">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <AccountCircleIcon style={{fontSize:"24px"}} />
                  <span className="ml-2">Login</span>
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}