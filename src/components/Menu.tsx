import React, { Fragment } from 'react'

const Menu = () => {
    return (
        <Fragment>
            <label htmlFor="menu" className="hamburger md-hide">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132H432C440.837 132 448 124.837 448 116V76C448 67.163 440.837 60 432 60H16C7.163 60 0 60 0 60V132C0 132 7.163 132 16 132ZM327.5 292C336.337 292 343.5 284.837 343.5 276V236C343.5 227.163 336.337 220 327.5 220H0V292H327.5ZM112.5 452H432C440.837 452 448 444.837 448 436V396C448 387.163 440.837 380 432 380H112.5V351.5L0 416L112.5 483.5V452Z"></path></svg>
            </label>
            <input type="checkbox" name="menu" id="menu" className="toggler hide"/>
            <ul className="menu-row top-menu" role="menubar">
                <li>
                    <a href="#about"><span>About</span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path opacity="1" fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg></a>
                </li>
                <li>
                    <a href="#projects"><span>Projects</span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg></a>
                </li>
                <li>
                    <a href="#contact"><span>Contact</span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg></a>
                </li>
            </ul>
        </Fragment>
    
    )
}

export default Menu
