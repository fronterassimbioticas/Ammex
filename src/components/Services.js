import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react'
import Column from './Column'
import Row from './Row'

import * as serviceStyle from './styles/services.module.scss'

function Services() {
    
    const [ title, setTitle ] = useState(<>
        <StaticImage
            src="../images/AMX_Web-3PLServices-03-1-Docking-Icon.png"
            alt="Docking icon"
            placeholder="tracedSVG"
        />
        <h6>DOCKING SERVICES</h6>
        <p>Our warehouse's extensive installed capacity, a highly trained team and storage for frozen, refrigerated and room temperature products, which allow us to receive and deliver any kind of food products.</p>
    </>)
    const [ sideBar, setSideBar] = useState(<>
        <div>
            <p className="h7">
                Equipped with<br/>
                <span className="black">17 Dock Doors</span>
            </p>
            <ul className="h7 pt24">
                <li>Full staging area</li>
                <li>Electric Palletjacks</li>
                <li>Electric Forklifts</li>
            </ul>
        </div>
        <div>
            <p className="h7">
                Accommodate docking<br/>
                services including<br/>
                <span className="black">Transfers</span>
            </p>
            <p className="h7">
                <span className="black">
                Staging<br/>
                Palletizing<br/>
                Restacking<br/>
                Wrapping<br/>
                Labeling<br/>
                Inbonds
                </span>
            </p>
        </div>
    </>)
    const [ image, setImage ] = useState(<StaticImage
        src="../images/AMX_Web-3PLServices-03-1-Docking-Img.jpg"
        alt=""
        placeholder="dominantColor"
    />)
    const [ active, setActive ] = useState(0)
    const selectService = (selected) =>{
        switch(selected){
            case 0:
                setTitle(<>
                    <StaticImage
                        src="../images/AMX_Web-3PLServices-03-1-Docking-Icon.png"
                        alt="Docking icon"
                        placeholder="tracedSVG"
                    />
                    <h6>DOCKING SERVICES</h6>
                    <p>Our warehouse's extensive installed capacity, a highly trained team and storage for frozen, refrigerated and room temperature products, which allow us to receive and deliver any kind of food products.</p>
                </>)
                setSideBar(<>
                    <div>
                        <p className="h7">
                            Equipped with<br/>
                            <span className="black">17 Dock Doors</span>
                        </p>
                        <ul className="h7 pt24">
                            <li>Full staging area</li>
                            <li>Electric Palletjacks</li>
                            <li>Electric Forklifts</li>
                        </ul>
                    </div>
                    <div>
                        <p className="h7">
                            Accommodate docking<br/>
                            services including<br/>
                            <span className="black">Transfers</span>
                        </p>
                        <p className="h7">
                            <span className="black">
                            Staging<br/>
                            Palletizing<br/>
                            Restacking<br/>
                            Wrapping<br/>
                            Labeling<br/>
                            Inbonds
                            </span>
                        </p>
                    </div>
                </>)
                setImage(<StaticImage
                    src="../images/AMX_Web-3PLServices-03-1-Docking-Img.jpg"
                    alt=""
                    placeholder="dominantColor"
                    quality={ 100 }
                />)
                setActive(0)
                break
            case 1:
                setTitle(<>
                    <StaticImage
                        src="../images/AMX_Web-3PLServices-03-2-ColdStorage-Icon.png"
                        alt="Cold storage icon"
                        placeholder="tracedSVG"
                    />
                    <h6>COLD STORAGE</h6>
                    <p>With more than 50,000 sq. ft. of fully racked cold storage, we have the capacity to ensure your cold and frozen product are preserved in top conditions.</p>
                </>)
                setSideBar(<>
                    <div>
                        <p className="h7">
                            Equipped with<br/>
                            <span className="black">17 dock doors</span>
                        </p>
                        <ul className="h7">
                            <li>Full staging area</li>
                            <li>Electric Palletjacks</li>
                            <li>Electric Forklifts</li>
                        </ul>
                    </div>
                    <div>
                        <p className="h7"><span className="black">Fully Racked</span></p>
                        <p className="h7 pt15"><span className="black">This sections provide secure product handling and storage to ensure product and packages are preserved in optimum conditions.</span></p>
                    </div>
                </>)
                setImage(<StaticImage
                    src="../images/AMX_Web-3PLServices-03-2-ColdStorage-Img.jpg"
                    alt=""
                    placeholder="dominantColor"
                    quality={ 100 }
                />)
                setActive(1)
                break
            case 2:
                setTitle(<>
                    <StaticImage
                        src="../images/AMX_Web-3PLServices-03-3-CustomAgency-Icon.png"
                        alt="Custom Agency icon"
                        placeholder="tracedSVG"
                    />
                    <h6>CUSTOMS AGENCY</h6>
                    <p>With Ammex, exported-imported products are streamlined thanks to our in-house customs agency. Which is how we help you to keep focused on making your business grow.</p>
                </>)
                setSideBar(<>
                    <div>
                        <p className="h7"><span className="black">Our in-house customs agency offices both in US and Mexico ensure exported-imported product is streamlined through:</span></p>
                    </div>
                    <div>
                        <ul className="h7">
                            <li>Cross verified documentation</li>
                            <li>Shortened lead times</li>
                            <li>Faster Export Fulfillment</li>
                        </ul>
                    </div>
                </>)
                setImage(<StaticImage
                    src="../images/AMX_Web-3PLServices-03-3-CustomAgency-Img.jpg"
                    alt=""
                    placeholder="dominantColor"
                    quality={ 100 }
                />)
                setActive(2)
                break
            case 3:
                setTitle(<>
                    <StaticImage
                        src="../images/AMX_Web-3PLServices-03-4-CrossBorder-Icon.png"
                        alt="Cross border icon"
                        placeholder="tracedSVG"
                    />
                    <h6>CROSS BORDER ICON</h6>
                    <p>Transporting product across the border requires correct product handling. At Ammex, we offer transportation from the US to Mexico on authorized and up to date compliant vehicles.Transporting product across the border requires correct product handling. At Ammex, we offer transportation from the US to Mexico on authorized and up to date compliant vehicles.</p>
                </>)
                setSideBar(<>
                    <div>
                        <p className="h7"><span className="black">Cross-border freight includes:</span></p>
                        <ul className="h7">
                            <li>Full staging area</li>
                            <li>Electric Palletjacks</li>
                            <li>Electric Forklifts</li>
                        </ul>
                    </div>
                </>)
                setImage(<StaticImage
                    src="../images/AMX_Web-3PLServices-03-4-CrossBorder-Img.jpg"
                    alt=""
                    placeholder="dominantColor"
                    quality={ 100 }
                />)
                setActive(3)
                break
            case 4:
                setTitle(<>
                    <StaticImage
                        src="../images/AMX_Web-3PLServices-03-5-USDA-Icon.png"
                        alt="USDA certification icon"
                        placeholder="tracedSVG"
                    />
                    <h6>USDA CERTIFICATION</h6>
                    <p>All exported meats and other food products must be certified by the USDA to ensure they meet exporting requirements and wholesomeness. At Ammex you don't have to worry about the details, we have an in-house USDA office to certify all exporting requirements are met.</p>
                </>)
                setSideBar(<>
                    <div>
                        <p className="h7"><span className="black">As one of California’s top exporting plants with 15 years’ experience and state of the art facilities, our USDA service includes:</span></p>
                        <ul className="h7 pt15">
                            <li> Product review & Compliance</li>
                            <li>Up-to-date compliance team and in-house USDA office</li>
                           
                        </ul>
                    </div>
                    {/* <div>
                        <p className="h7"><span className="black">USDA Certification Service includes</span></p>
                        <ul className="h7 pt15">
                            <li>Product review &amp; Compliance</li>
                            <li>15 years experience</li>
                            <li>Up to date compliance team</li>
                            <li>And in house USDA office</li>
                        </ul>
                    </div> */}
                </>)
                setImage(<StaticImage
                    src="../images/AMX_Web-3PLServices-03-5-USDA-Img.jpg"
                    alt=""
                    placeholder="dominantColor"
                    quality={ 100 }
                />)
                setActive(4)
                break
            case 5:
                setTitle(<>
                    <StaticImage
                        src="../images/AMX_Web-3PLServices-03-6-Sagarpa-Icon.png"
                        alt="SAGARPA inspection icon"
                        placeholder="tracedSVG"
                    />
                    <h6>SGARPA INSPECTION</h6>
                    <p>Imported Meats into Mexico must be verified and inspected by SAGARPA-SENASICA Mexican officials to ensure products meet requirements for wholesomeness, documentation and traceability. At Ammex, we are committed to transport and deliver your products in top conditions to the SAGARPA verification point in Mexico.</p>
                </>)
                setSideBar(<>
                    <div>
                        <p className="h7"><span className="black">SAGARPA Inspection includes:</span></p>
                        <ul className="h7">
                            <li>Docking Services</li>
                            <li>SAGARPA Verification Inspection</li>
                        </ul>
                    </div>
                </>)
                setImage(<StaticImage
                    src="../images/AMX_Web-3PLServices-03-6-Sagarpa-Img.jpg"
                    alt=""
                    placeholder="dominantColor"
                    quality={ 100 }
                />)
                setActive(5)
                break
            default:
                setTitle(<>
                    <StaticImage
                        src="../images/AMX_Web-3PLServices-03-1-Docking-Icon.png"
                        alt="Docking icon"
                        placeholder="tracedSVG"
                    />
                    <h6>DOCKING SERVICES</h6>
                    <p>Our warehouse's extensive installed capacity, a highly trained team and storage for frozen, refrigerated and room temperature products, which allow us to receive and deliver any kind of food products.</p>
                </>)
                setSideBar(<>
                    <div>
                        <p className="h7">
                            Equipped with<br/>
                            17 Dock Doors
                        </p>
                        <ul className="h7">
                            <li>Full staging area</li>
                            <li>Electric Palletjacks</li>
                            <li>Electric Forklifts</li>
                        </ul>
                    </div>
                    <div>
                        <p className="h7">
                            Accommodate docking<br/>
                            services including<br/>
                            Transfers
                        </p>
                        <p className="h7">
                            Staging
                            Palletizing
                            Restacking
                            Wrapping
                            Labeling
                            Inbonds
                        </p>
                    </div>
                </>)
                setImage(<StaticImage
                    src="../images/AMX_Web-3PLServices-03-1-Docking-Img.jpg"
                    alt=""
                    placeholder="dominantColor"
                    quality={ 100 }
                />)
                setActive(0)
                break
        }
    }
    return (
        <section>
            <Row>
                <Column size={3} mobile={4}>
                    <ul className={ serviceStyle.button_list }>
                        <li>
                            <button 
                                className={ active === 0 ? 'blue' : '' }
                                onClick={ () => {
                                    selectService(0)
                                }}
                            >
                                Docking Services
                            </button>
                        </li>
                        <li>
                            <button 
                                className={ active === 1 ? 'blue' : '' }
                                onClick={ () => {
                                    selectService(1)
                                }}
                            >
                                Cold Storage
                            </button>
                        </li>
                        <li>
                            <button
                                className={ active === 2 ? 'blue' : '' }
                                onClick={ () => {
                                    selectService(2)
                                }}
                            >Customs Agency</button>
                        </li>
                        <li>
                            <button 
                                className={ active === 3 ? 'blue' : '' }
                                onClick={ () => {
                                    selectService(3)
                                }}
                            >Cross-Border Freight</button>
                        </li>
                        <li>
                            <button 
                                className={ active === 4 ? 'blue' : '' }
                                onClick={ () => {
                                    selectService(4)
                                }}
                            >USDA Certification</button>
                        </li>
                        <li>
                            <button 
                                className={ active === 5 ? 'blue' : '' }
                                onClick={ () => {
                                    selectService(5)
                                }}
                            >SAGARPA Inspection</button>
                        </li>
                    </ul>
                </Column>
                <Column size={9} mobile={4}>
                    <div className={ serviceStyle.title }>
                        { title }
                    </div>
                    <hr/>
                    <Row>
                        <SideBar>
                            { sideBar }
                        </SideBar>
                        <Column size={8} mobile={4} className="text-right">
                            { image }
                        </Column>
                    </Row>
                </Column>
            </Row>
        </section>
    )
}

export default Services

function SideBar( props ){
    return(
        <Column size={4} mobile={4} className={ serviceStyle.sideBar }>
            { props.children }
        </Column>
    )
}