import React from "react";
import logo from '../assets/logo.svg';
import DropdownNavigation from "./DropdownNavigation";


function Nav() {
    return (
        <>
        <img src={logo} alt="logo" />
        <DropdownNavigation></DropdownNavigation>
        <h2>Nav working</h2>
        </>
    )
}

export default Nav;