import React from "react";
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import './SideDrawer.css';

const SideDrawer = props =>{
    const content = 
    <CSSTransition in={props.show} timeout={200} onClick={props.onClick} classNames="slide-in-left-exit" mountOnEnter unmountOnExit>
        <aside className="side-drawer">{props.children}</aside>
    </CSSTransition>

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer;