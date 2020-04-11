import React, { useState, useEffect } from 'react'
import './Header.scss'

function Header() {
    const [toggle, setToggle] = useState(false);
    const togglebtn = () => setToggle(!toggle);

    useEffect(() => {
        if(toggle === true){
            document.body.classList.remove("nav-open");
        }else if(toggle === false){
            document.body.classList.add("nav-open");
        }
    },[toggle]);

    return (
        <>
            <header className="header">
                <nav className="global-nav">
                    <ul className="global-nav__list">
                        <li className="global-nav__item"><a href="">メニュー1</a></li>
                        <li className="global-nav__item"><a href="">メニュー2</a></li>
                        <li className="global-nav__item"><a href="">メニュー3</a></li>
                        <li className="global-nav__item"><a href="">メニュー4</a></li>
                        <li className="global-nav__item"><a href="">メニュー5</a></li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={() => setToggle(togglebtn)}>
                    <span className="hamburger__line hamburger__line--1"></span>
                    <span className="hamburger__line hamburger__line--2"></span>
                    <span className="hamburger__line hamburger__line--3"></span>
                </div>
                <div className={`black-bg ${toggle ? "" : "nav-open"}`} onClick={() => setToggle(togglebtn)} id="js-black-bg"></div>
            </header>
        </>
    )
}

export default Header
