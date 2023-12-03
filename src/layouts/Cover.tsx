import React, { Fragment } from 'react'

const Banner = () => {
    return (
        <Fragment>
            <section className="bg-transparent cover pb-0">
                <div className="container z-1">
                    <h1>Edmark Magsalin.</h1>
                    <p>Web developer/designer</p>
                    <div>
                        <span><a href="#contact" className="btn btn-primary mb-1 mr-1" target="_parent">Contact me</a></span>
                        <span><a href="#projects" className="btn btn-secondary" target="_parent">View projects</a></span>
                    </div>
                </div>
                <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="currentColor" d="M0,224L120,234.7C240,245,480,267,720,261.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            </section>
        </Fragment>
    )
}

export default Banner
