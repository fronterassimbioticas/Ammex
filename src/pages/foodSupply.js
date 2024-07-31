// src/pages/FoodSupply.js
import React, { useState, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Column from '../components/Column';
import Layout from '../components/Layout';
import MouseParallax from '../components/MouseParallax';
import Row from '../components/Row';
import ScheduleVisit from '../components/ScheduleVisit';
import Check from '../components/Check';
import TextBanner from '../components/TextBanner'; // Import the new component
import videoSrc from '../videos/Ammex.mp4';
import styles from '../styles/foodSupply.module.scss';

function FoodSupply() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    return (
        <Layout title="Food supply">
            <MouseParallax page="services">
                <h4>Food supply</h4>
                <h1 className="mt30">Working hard<br />and deliver on time</h1>
            </MouseParallax>
            <section>
                <Row className="v-align">
                    <Column size={6} mobile={4}>
                        <h3>We supply well</h3>
                        <h5>We are proud of our work because every time we supply markets and local restaurants with food, we also bring well-being to our community.</h5>
                    </Column>
                    <Column size={6} mobile={4} className="text-center">
                        <div className={styles.videoWrapper}>
                            <video
                                ref={videoRef}
                                className={styles.video}
                                width="600"
                                onPlay={handlePlay}
                                onPause={handlePause}
                                controls // Enable default controls
                            >
                                <source src={videoSrc} type='video/mp4' />
                                <track kind="captions" srcLang="en" src="path/to/captions.vtt" />
                                Your browser does not support the video tag.
                            </video>
                            {!isPlaying && (
                                <button
                                    className={styles.playButton}
                                    onClick={() => videoRef.current && videoRef.current.play()}
                                    aria-label="Play video" // Add aria-label for accessibility
                                />
                            )}
                        </div>
                    </Column>
                </Row>
                <Row>
                    <Column className="text-center">
                        <TextBanner /> {/* Use the new component */}
                    </Column>
                </Row>
                <Row>
                    <Column size={6} mobile={4} padding="0">
                        <StaticImage
                            src="../images/AMX_Web-About-03-Img.jpg"
                            alt=""
                            placeholder="dominantColor"
                            quality={100}
                            className="cover-width"
                        />
                    </Column>
                    <Column size={6} mobile={4} padding="large" className="bg-red">
                        <h3 className="pt50">Products</h3>
                        <h6>
                            <ul className="check h6 pt24">
                                <Check>Beef</Check>
                                <Check>Poultry (Chicken / Turkey)</Check>
                                <Check>Pork</Check>
                                <Check>Lamb</Check>
                                <Check>Offal</Check>
                                <Check>Dairy Products</Check>
                                <Check>Dry goods</Check>
                            </ul>
                        </h6>
                    </Column>
                </Row>
                <Row>
                    <Column size={6} mobile={4}>
                        <h2>We got your back, no matter what</h2>
                    </Column>
                </Row>
                <Row padding="t">
                    <Column size={7} mobile={4}>
                        <p>We know that sometimes the product you need is hard to handle or it is beyond your reach. Which is why we work with more than 120 international brands across...</p>
                        <h1 className="mt50">USA</h1>
                        <h1>Mexico</h1>
                        <h1>Canada</h1>
                        <h1>New Zealand</h1>
                        <h1>Australia</h1>
                        <StaticImage
                            src='../images/AMX_Web-FoodSupply-06-Mapa.png'
                            alt='Map'
                            placeholder='tracedSVG'
                            className='map'
                        />
                    </Column>
                    <Column size={5} mobile={4}>
                        <p id="products">Our partnerships include:</p>
                        <StaticImage 
                            src='../images/AMX_Web-FoodSupply-05-Logos.png' 
                            alt="Daily's, Carolina turkey, Carnencanto, Cargill, Bars S, Darigold, Olymel, McCain, SeaBord foods, Yosemite foods, Banquet, Swift, Qualimentos, Pilgrim's, Sanderson Farms, Longmont, Smithfield, Farmer John, OkFoods, Viva, Tyson, Joseph Gallo Farms, Ibp, Harris ranch, Farmland, Hormel foods, Butterball, Ventura foods, Table maid, Sioux preme, Peco, One world, maple leaf" 
                            placeholder="tracedSVG"
                            className="mobile-hide"
                        />
                        <StaticImage 
                            src='../images/AMX_Web-FoodSupply-05-Logos-VersionMobile.jpg' 
                            alt="Daily's, Carolina turkey, Carnencanto, Cargill, Bars S, Darigold, Olymel, McCain, SeaBord foods, Yosemite foods, Banquet, Swift, Qualimentos, Pilgrim's, Sanderson Farms, Longmont, Smithfield, Farmer John, OkFoods, Viva, Tyson, Joseph Gallo Farms, Ibp, Harris ranch, Farmland, Hormel foods, Butterball, Ventura foods, Table maid, Sioux preme, Peco, One world, maple leaf" 
                            placeholder="tracedSVG"
                            className="desktop-hide"
                            objectFit="contain"
                        />
                    </Column>
                </Row>
            </section>
            <ScheduleVisit />
        </Layout>
    )
}

export default FoodSupply
