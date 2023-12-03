import React, { useEffect } from 'react'
import Logo from '../components/Logo'
import Menu from '../components/Menu'

const Navbar = () => {
    useEffect(() => {
        const topNav: any = document.querySelector('.top-nav');
        const sections = document.querySelectorAll('.anchor-point');
        const sectionLinks = document.querySelectorAll('.top-menu a');
        const menuToggle: any = document.querySelector('.menu-row.top-menu');
        const menuCheckBox: any = document.querySelector('#menu');
        function determineActiveSection () {
            sections.forEach((section: any) => {
                sectionLinks.forEach((sectionLink: any) => {
                    // offsetTop is the distance of an element from the top of the window
                    // scrollY is the distance a user scrolled from the top of the window
                    if(section.offsetTop < window.scrollY+topNav.clientHeight) {
                        if(sectionLink.getAttribute('href').slice(1) === section.getAttribute('id')){
                            sectionLink.classList.add('active');
                        } else {
                            sectionLink.classList.remove('active');
                        }
                    } else {
                        if(sectionLink.getAttribute('href').slice(1) === section.getAttribute('id')){
                            sectionLink.classList.remove('active');
                        }
                    }
                });
            });

            if(window.scrollY <= topNav.clientHeight) {
                topNav.classList.remove('bg-light-overlay')
            } else {
                topNav.classList.add('bg-light-overlay')
            }
        }
        window.addEventListener('scroll', determineActiveSection);
        menuToggle.addEventListener('click', () => {
            menuCheckBox.checked = false;
        })
    });
    return (
        <nav className="top-nav bg-blur">
            <div className="container">
                <Logo />
                <Menu />
            </div>
        </nav>  
    )
}

export default Navbar
