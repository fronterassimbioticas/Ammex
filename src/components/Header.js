import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Column from "./Column";
import Row from "./Row";

import * as headerStyles from './styles/header.module.scss'

function Header(props){

    const [ menu, setMenu ] = useState(<DesktopMenu/>)
    useEffect(() => {
        if(window.innerWidth > 1200){
            setMenu(<DesktopMenu/>)
        }
        else{
            setMenu(<MobileMenu/>)
        }
        const resize = () => {
            if(window.innerWidth > 1200){
                setMenu(<DesktopMenu/>)
            }
            else{
                setMenu(<MobileMenu/>)
            }
        }
        window.addEventListener('resize', resize)

        return ''

    }, [])
    
    return(
        <>
            <Helmet>
                <title>{ props.title + ' | We care, we deliver, we supply well' }</title>
            </Helmet>
            <header>
                { menu }
            </header>
        </>
    )
}
export default Header;

function DesktopMenu(){
    return(
        <Row padding="small" className="v-align">
            <Column size={8}>
                <Link to="/">
                    <StaticImage 
                        src="../images/logo-ammex.png"
                        alt="Ammex logo"
                    />
                </Link>
            </Column>
            <Column size={4} className="flex space-between">
                <Link to='/about' className="h7">About Us</Link>
                <div className={ headerStyles.services }>
                    <span className="h7 a">Services</span>
                    <Link to="/foodSupply">Food Supply</Link>
                    <Link to="/logistics">3PL Services</Link>
                </div>
                <Link to='/facilities' className="h7">Facilities</Link>
                <Link to='/contact' className="h7">Contact</Link>
            </Column>
        </Row>
    )
}
function MobileMenu(){
    const closed = headerStyles.closed
    const opened = headerStyles.opened
    const [ toggle, setToggle ] = useState(closed)
    const toggleTrigger = () => {
        if(toggle === closed){
            setToggle(opened)
        }
        else{
            setToggle(closed)
        }
    }
    return(
        <>
        <Row padding="small" className="v-align">
            <Column size={6}>
                <Link to="/">
                    <StaticImage 
                        src="../images/logo-ammex.png"
                        alt="Ammex logo"
                    />
                </Link>
            </Column>
            <Column size={6} className="text-right">
                <a href="###" onClick={ toggleTrigger }>
                    <StaticImage
                        src="../images/hamburger-ammex.png"
                        alt="Mobile menu"
                        quality={ 100 }
                    />
                </a>
            </Column>
        </Row>
        <Row className={ headerStyles.mobile_menu + ' ' + toggle}>
            <Column className={"flex space-between " + headerStyles.mobile_menu_items }>
                <Link to='/about' className="h7">About Us</Link>
                <div className={ headerStyles.services }>
                    <span className="h7 a">Services</span>
                    <Link to="/foodSupply">Food Supply</Link>
                    <Link to="/logistics">3PL Services</Link>
                </div>
                <Link to='/facilities' className="h7">Facilities</Link>
                <Link to='/contact' className="h7">Contact</Link>
            </Column>
        </Row>
        </>
    )
}