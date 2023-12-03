import React, { Fragment } from 'react'
import logo from '../assets/images/logo/logo.svg'

const Logo = () => {
    return (
        <Fragment>
            <div className="logo">
                <a href="./">
                    <img src={logo} alt="Edmark Magsalin"/>
                </a>
            </div>
        </Fragment>
    )
}

export default Logo
