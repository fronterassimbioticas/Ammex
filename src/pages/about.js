import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Column from '../components/Column'
import Layout from '../components/Layout'
import MouseParallax from '../components/MouseParallax'
import Row from '../components/Row'
import ScheduleVisit from '../components/ScheduleVisit'

function About() {
    return (
        <Layout title="About us">
            <MouseParallax page="about">
                <h4>+20 years</h4>
                <h1 className="mt30">Teamwork<br/>
                can make a big<br/>
                difference</h1>
            </MouseParallax>
            <section className="bg-red">
                <Row className="v-align" padding="large">
                    <Column size={7} mobile={4}>
                        <h5>Our team is ready to respond on call, always there to take down any order no matter the size because we know that sometimes all it takes to keep growing is to sell another box - or pallet.</h5>
                    </Column>
                    <Column size={5} mobile={4} className="text-center">
                        <StaticImage 
                            src="../images/white-icon-ammex.png"
                            alt=""
                            placeholder="tracedSVG"
                        />
                    </Column>
                </Row>
            </section>
            <section>
                <Row padding="large" className="relative">
                    <Column size={9} mobile={4}>
                        <h2>We work with leadership, excellence and transparency</h2>
                    </Column>
                    <div className="leadership-background">
                        <StaticImage
                            src="../images/AMX_Web-About-02-FondoGrafico.png"
                            alt=""
                        />
                    </div>
                </Row>
            </section>
            <section>
                <Row className="v-align" padding="tb">
                    <Column size={6} mobile={4} padding="0">
                        <StaticImage
                        src="../images/AMX_Web-About-03-Img.jpg"
                        placeholder="dominantColor"
                        alt=""
                        className="cover-width"
                        quality={ 100 }
                        />
                    </Column>
                    <Column size={1}></Column>
                    <Column size={4} mobile={4}>
                        <h3>Experience and infrastructure</h3>
                        <p className="mt30">We have more than 20 years of experience distributing products from one of the largest plants in California and the only one of its kind certified by the USDA.</p>
                        <Link to="/facilities" className="btn mt50">CHECK OUR FACILITIES</Link>
                    </Column>
                    <Column size={1}></Column>
                </Row>
                <Row className="v-align reverse" padding="t">
                    <Column size={4} mobile={4}>
                        <h3>Wide availability</h3>
                        <p className="mt30">Thanks to our relationship with the largest food producers in the United States, we are able to secure and offer wide availability of high demand, premium and specialty products.</p>
                        <Link to="/foodSupply" className="btn mt50">CHECK OUR PRODUCT LISTS</Link>
                    </Column>
                    <Column size={6} mobile={4} padding="0">
                        <StaticImage
                        src="../images/AMX_Web-About-04-Img.jpg"
                        placeholder="dominantColor"
                        alt=""
                        className="cover-width"
                        quality={ 100 }
                        />
                    </Column>
                </Row>
                <Row className="v-align">
                    <Column size={6} mobile={4}>
                        <h2>Working together to grow together</h2>
                        <p className="mt30">We grow every time our clients reach their business goals as they keep trusting us to supply the most important needs of their companies. Which is why we are committed to be as reliable as a longtime friend.</p>
                    </Column>
                    <Column size={6} mobile={4}>
                        <StaticImage
                            src="../images/AMX_Web-About-05-Img.png"
                            alt=""
                            placeholder="tracedSVG"
                        />
                    </Column>
                </Row>
            </section>
            <ScheduleVisit />
        </Layout>
    )
}

export default About
