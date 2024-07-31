import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Column from '../components/Column'
import Facilities from '../components/Facilities'
import ImageRow from '../components/ImageRow'
import Layout from '../components/Layout'
import MapParallax from '../components/MapParallax'
import MouseParallax from '../components/MouseParallax'
import Row from '../components/Row'
import ScheduleVisit from '../components/ScheduleVisit'

function facilities() {
    return (
        <Layout title="Facilities">
            <MouseParallax page="facilities">
                <h4>Our facilities</h4>
                 <h1 className="mt30">The greatest warehouse<br/>of its kind in California</h1>
            </MouseParallax>
            <section className="bg-red">
                <Row padding="large">
                    <Column>
                        <h5>We feel proud to say that we work from one of the most important plants of its kind - our warehouse's extensive installed capacity is the reason we are able to provide efficient support to each of our clients.</h5>
                    </Column>
                </Row>
            </section> 
            <section>
                <Row padding="b">
                    <Column size={8} mobile={4}>
                        <h2>Warehouse facilities</h2>
                        <h5>More than 50,000 sqft of cold storage and staging floor.</h5>
                    </Column>
                </Row>
                <Row padding="tb">
                    <Column>
                        <hr/>
                    </Column>
                </Row>
                <Facilities />
                <ImageRow className="mobile-hide">
                    <Column size={3} mobile={2}>
                        <StaticImage
                            src="../images/AMX_Web-OurFacilities-03-BannerImages-1.jpg"
                            alt=""
                            width={ 660 }
                            placeholder="dominantColor"
                        />
                    </Column>
                    <Column size={3} mobile={2}>
                        <StaticImage
                            src="../images/AMX_Web-OurFacilities-03-BannerImages-2.jpg"
                            alt=""
                            width={ 660 }
                            placeholder="dominantColor"
                        />
                    </Column>
                    <Column size={3} mobile={4}>
                        <StaticImage
                            src="../images/AMX_Web-OurFacilities-03-BannerImages-3.jpg"
                            alt=""
                            width={ 660 }
                            placeholder="dominantColor"
                            className="cover-width"
                        />
                    </Column>
                </ImageRow>
                <ImageRow className="mobile-hide">
                    <Column size={4}>
                        <StaticImage
                            src="../images/AMX_Web-OurFacilities-03-BannerImages-4.jpg"
                            alt=""
                            width={ 960 }
                            placeholder="dominantColor"
                            className="cover-width"
                        />
                    </Column>
                    <Column size={4}>
                        <StaticImage
                            src="../images/AMX_Web-OurFacilities-03-BannerImages-5.jpg"
                            alt=""
                            width={ 960 }
                            placeholder="dominantColor"
                            className="cover-width"
                        />
                    </Column>
                    <Column size={4}>
                        <StaticImage
                            src="../images/AMX_Web-OurFacilities-03-BannerImages-6.jpg"
                            alt=""
                            width={ 960 }
                            placeholder="dominantColor"
                        />
                    </Column>
                </ImageRow>
                <ImageRow className="desktop-hide">
                    <Column size={3} mobile={2}>
                        <StaticImage
                            src="../images/AMX_Web-OurFacilities-03-BannerImages-1.jpg"
                            alt=""
                            width={ 660 }
                            placeholder="dominantColor"
                        />
                    </Column>
                    <Column size={3} mobile={2}>
                        <StaticImage
                            src="../images/AMX_Web-OurFacilities-03-BannerImages-2.jpg"
                            alt=""
                            width={ 660 }
                            placeholder="dominantColor"
                        />
                    </Column>
                </ImageRow>
                <ImageRow className="desktop-hide">
                    <Column size={3} mobile={3}>
                        <StaticImage
                            src="../images/AMX_Web-OurFacilities-03-BannerImages-3.jpg"
                            alt=""
                            width={ 660 }
                            placeholder="dominantColor"
                            className="cover-width"
                        />
                    </Column>
                    <Column size={4} mobile={3}>
                        <StaticImage
                            src="../images/AMX_Web-OurFacilities-03-BannerImages-4.jpg"
                            alt=""
                            width={ 960 }
                            placeholder="dominantColor"
                            className="cover-width"
                        />
                    </Column>
                </ImageRow>
                <ImageRow className="desktop-hide">
                    <Column size={4} mobile={3}>
                        <StaticImage
                            src="../images/AMX_Web-OurFacilities-03-BannerImages-5.jpg"
                            alt=""
                            width={ 960 }
                            placeholder="dominantColor"
                            className="cover-width"
                        />
                    </Column>
                    <Column size={4} mobile={3}>
                        <StaticImage
                            src="../images/AMX_Web-OurFacilities-03-BannerImages-6.jpg"
                            alt=""
                            width={ 960 }
                            placeholder="dominantColor"
                        />
                    </Column>
                </ImageRow>
                <Row>
                    <Column size={5} mobile={4}>
                        <h2>Strategic Location</h2>
                    </Column>
                    <Column size={7} mobile={4}>
                        <p>Thanks to our location at 7780 Waterville road with our own building and cold storage facility we are strategically positioned minutes away from the Mexican – US Border and next to the 905 freeway.</p>
                    </Column>
                </Row>
            </section>
            <MapParallax />
            <ScheduleVisit/>
        </Layout>
    )
}

export default facilities
