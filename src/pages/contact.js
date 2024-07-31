import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Column from '../components/Column'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'
import Row from '../components/Row'

function contact() {
    return (
        <Layout title="Contact">
            <section>
                <Row padding="large" className="pb30">
                    <Column size={7} mobile={4}>
                        <h1>We are ready to respond on call.</h1>
                    </Column>
                    <Column size={4} mobile={4}>
                        <StaticImage
                            src="../images/AMX_Web-Contact-01-Arrow.png"
                            alt="arrow"
                            placeholder="tracedSVG"
                        />
                    </Column>
                </Row>
                <Row>
                    <Column size={6} mobile={4}>
                        <h5>Welcome to the Ammex community!</h5>
                        <p>Fill out the form below and we will contact you as soon as possible.</p>
                        <ContactForm />
                    </Column>
                    <Column size={0} mobile={1}></Column>
                    <Column size={4} mobile={3}>
                        <p className="h7">(619) 671-7700<br/>info@ammexservices.com</p>
                        <p>Ammex Services USA<br/>7780 Waterville Road<br/>San Diego, CA 92154</p>
                        <a className="btn blue mt30" href="https://goo.gl/maps/oX6n4YDXZLSn7FKb7">GOOGLE MAPS</a>
                    </Column>
                </Row>
            </section>
        </Layout>
    )
}

export default contact
