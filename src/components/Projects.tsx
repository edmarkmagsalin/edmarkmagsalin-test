import React, { Fragment, useEffect } from 'react'
import contactKeeper from '../assets/images/thumbnails/contact-keeper.png'
import githubFinder from '../assets/images/thumbnails/github-finder.png'
import MERNCRUD from '../assets/images/thumbnails/mern-crud-bare-minimum.png'
import elsevier from '../assets/images/thumbnails/elsevier.jpg'
import lexisnexis from '../assets/images/thumbnails/lexisnexis.jpg'
import tolley from '../assets/images/thumbnails/tolley.jpg'

const Projects = () => {
    const currentlyFixingAlert = (e: any) => {
        e.preventDefault();
        alert('My Apologies. I\'m currently fixing the link for this project');
    }
    useEffect(() => {
        const slider: any = document.querySelector('.carousel__slider');
        const prevButton: any = document.querySelector('#prev');
        const nextButton: any = document.querySelector('#next');
        const carouselItems: any = document.querySelectorAll('.carousel__item');
        let currentSlide = 0;

        function determineButtonStyle() {
            // if in the starting position
            if(currentSlide === 0) {
                prevButton.classList.add('disable');
            } else {
                prevButton.classList.remove('disable');
            }
            
            // if the end position is reach
            if(currentSlide === carouselItems.length-1) {
                nextButton.classList.add('disable');
            } else {
                nextButton.classList.remove('disable');
            }
        }

        prevButton.addEventListener('click', () => {
            if(currentSlide === 0) {return}

            let moveWidth: any;
            if(currentSlide <= 1) {
                moveWidth = 0;
                --currentSlide;
            } else {
                moveWidth = ((currentSlide-2)*(slider.clientWidth*.8))+(slider.clientWidth*.7);
                --currentSlide;
            }

            carouselItems.forEach((carouselItem: any) => {
                carouselItem.style.transform = `translateX(-${moveWidth}px)`;
            });
            determineButtonStyle();
        });

        nextButton.addEventListener('click', () => {
            if(currentSlide === carouselItems.length-1) {return}

            let moveWidth: any;
            if(currentSlide === 0) {
                moveWidth = slider.clientWidth*.7;
                ++currentSlide;
            } else {
                moveWidth = (currentSlide*slider.clientWidth*.8)+(slider.clientWidth*.7);
                ++currentSlide;
            }

            carouselItems.forEach((carouselItem: any) => {
                carouselItem.style.transform = `translateX(-${moveWidth}px)`;
            });
            determineButtonStyle();
        });
    });
    return (
        <Fragment>
            <section>
                <span className="anchor-point" id="projects">&nbsp;</span>
                <div className="container">
                    <h2>Projects</h2>
                    <p>Here are some of my projects that I'm proud of. These projects focuses on using modern web technologies like <strong>Node.js</strong>, <strong>React</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.</p>
                </div>
                <div className="container">
                    <div className="carousel">
                        
                        <div id="prev" className="carousel__prev disable">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                        </div>

                        <div className="carousel__slider">


                        <div className="carousel__item">
                                <div className="project">
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-5 pb-1">
                                            <img src={lexisnexis} alt="LexisNexis UK" />
                                        </div>
                                        <div className="col-sm-12 col-lg-7">
                                            <h4>LexisNexis UK</h4>
                                            <p className="lead">
                                                A project that I've worked on before for LexisNexis UK using TeamSite (CMS)
                                            </p>
                                            <p>
                                                Powered by: TeamSite, Vanilla JavaScript
                                            </p>
                                            <p>
                                                <a href="https://www.lexisnexis.co.uk/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit this project</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="carousel__item">
                                <div className="project">
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-5 pb-1">
                                            <img src={tolley} alt="Tolley UK" />
                                        </div>
                                        <div className="col-sm-12 col-lg-7">
                                            <h4>Tolley UK</h4>
                                            <p className="lead">
                                                A project that I've worked on before for Tolley UK using SquizMatrix (CMS)
                                            </p>
                                            <p>
                                                Powered by: SquizMatrix, Vanilla JavaScript
                                            </p>
                                            <p>
                                                <a href="https://www.tolley.co.uk/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit this project</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="carousel__item">
                                <div className="project">
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-5 pb-1">
                                            <img src={elsevier} alt="Elsevier" />
                                        </div>
                                        <div className="col-sm-12 col-lg-7">
                                            <h4>Elsevier</h4>
                                            <p className="lead">
                                                A project that I've worked on before for Elsevier using SquizMatrix (CMS)
                                            </p>
                                            <p>
                                                Powered by: SquizMatrix, Vanilla JavaScript
                                            </p>
                                            <p>
                                                <a href="https://edmarkmagsalin-contact-keeper.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit this project</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel__item">
                                <div className="project">
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-5 pb-1">
                                            <img src={contactKeeper} alt="Contact Keeper" />
                                        </div>
                                        <div className="col-sm-12 col-lg-7">
                                            <h4>Contact Keeper</h4>
                                            <p className="lead">
                                                You can organize your personal and professional contacts using this application. This project is part of the course <strong>React Front To Back</strong> that is created by Brad Traversy.
                                            </p>
                                            <p>
                                                Powered by: MongoDB, Express, React, Node.js
                                            </p>
                                            <p>
                                                <a onClick={currentlyFixingAlert} href="https://edmarkmagsalin-contact-keeper.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit this project</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel__item">
                                <div className="project">
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-5 pb-1">
                                            <img src={githubFinder} alt="GitHub User Finder" />
                                        </div>
                                        <div className="col-sm-12 col-lg-7">
                                            <h4>Github User Finder</h4>
                                            <p className="lead">
                                                This application lets you search Github users using the Github API. This project is part of the course <strong>React Front To Back</strong> that is created by Brad Traversy.
                                            </p>
                                            <p>
                                                Powered by: Node.js, Express, React
                                            </p>
                                            <p>
                                                <a href="https://edmarkmagsalin-github-user-finder.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit this project</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel__item">
                                <div className="project">
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-5 pb-1">
                                            <img src={MERNCRUD} alt="MERN CRUD Bare Minimum" />
                                        </div>
                                        <div className="col-sm-12 col-lg-7">
                                            <h4>MERN CRUD Bare Minimum</h4>
                                            <p className="lead">
                                                This is a demon of Create, Read, Update and Delete (CRUD) using <strong>MERN</strong> stack. I also added account management using <strong>JSON Web Tokens</strong> for authorization.
                                            </p>
                                            <p>
                                                Powered by: MongoDB, Express, React, Node.js
                                            </p>
                                            <p>
                                                <a onClick={currentlyFixingAlert} href="https://mern-crud-bare-minimum.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit this project</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div id="next" className="carousel__next">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                        </div>
                    </div>

                </div>
            </section>
        </Fragment>
    )
}

export default Projects
