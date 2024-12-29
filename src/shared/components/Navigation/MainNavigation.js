import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import './MainNavigation.css';
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";
import Backdrop from '../UIElements/Backdrop';
const MainNavigation = props =>{
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () =>{
        setDrawerIsOpen(true);
    }

    const closeDrawer = () =>{
        setDrawerIsOpen(false);
    }
    return (
        <React.Fragment>
            {drawerIsOpen &&  <Backdrop onClick={closeDrawer}/>}
           {drawerIsOpen && (<SideDrawer>
                <div className="main-navigation__drawer-nav">
                    <NavLinks />
                </div>
            </SideDrawer>
            )}
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawer}>
                    <span />
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                <Link to="/"> YourPlaces </Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation;