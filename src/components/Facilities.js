import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react'
import Column from './Column'
import Row from './Row'

import * as facilityStyles from './styles/facilities.module.scss'

function Facilities() {
    
    const [ image, setImage ] = useState(<StaticImage
        src="../images/AMX_Web-OurFacilities-02-0-Warehouse.jpg"
        alt="hello"
    />)
    const [ active, setActive ] = useState('')

    const area = (hovered) =>{
        switch(hovered){
            case 0:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-1-Warehouse.jpg"
                    alt="hello"
                />)
                setActive(0)
                break
            case 1:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-2-Warehouse.jpg"
                    alt="hello"
                />)
                setActive(1)
                break
            case 2:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-3-Warehouse.jpg"
                    alt="hello"
                />)
                setActive(2)
                break
            case 3:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-4-Warehouse.jpg"
                    alt="hello"
                />)
                setActive(3)
                break
            case 4:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-5-Warehouse.jpg"
                    alt="hello"
                />)
                setActive(4)
                break
            case 5:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-6-Warehouse.jpg"
                    alt="hello"
                />)
                setActive(5)
                break
            case 6:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-7-Warehouse.jpg"
                    alt="hello"
                />)
                setActive(6)
                break
            case 7:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-8-Warehouse.jpg"
                    alt="hello"
                />)
                setActive(7)
                break
            case 8:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-9-Warehouse.jpg"
                    alt="hello"
                />)
                setActive(8)
                break
            case 9:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-10-Warehouse.jpg"
                    alt="hello"
                />)
                setActive(9)
                break
            case 10:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-11-Warehouse.jpg"
                    alt="hello"
                />)
                setActive(10)
                break
            default:
                setImage(<StaticImage
                    src="../images/AMX_Web-OurFacilities-02-0-Warehouse.jpg"
                    alt="hello"
                />)
                setActive('')
                break
        }
    }
    return (
        <Row padding="t">
            <Column size={3} mobile={4}>
                <ol className={"h7 " + facilityStyles.list }>
                    <li>
                        <a className={ active === 0 ? facilityStyles.active : ''} onMouseOver={ ()=>{ area(0) } } onFocus={ () => { area(0) } } href="###">
                            Dry area storage
                        </a>
                    </li>
                    <li>
                        <a className={ active === 1 ? facilityStyles.active : ''} onMouseOver={ ()=>{ area(1) } } onFocus={ () => { area(1) } } href="###">
                            Fully racked sections
                        </a>
                    </li>
                    <li>
                        <a className={ active === 2 ? facilityStyles.active : ''} onMouseOver={ ()=>{ area(2) } } onFocus={ () => { area(2) } } href="###">
                            Refrigerated cold storage
                        </a>
                    </li>
                    <li>
                        <a className={ active === 3 ? facilityStyles.active : ''} onMouseOver={ ()=>{ area(3) } } onFocus={ () => { area(3) } } href="###">
                            Freezer cold storage
                        </a>
                    </li>
                    <li>
                        <a className={ active === 4 ? facilityStyles.active : ''} onMouseOver={ ()=>{ area(4) } } onFocus={ () => { area(4) } } href="###">
                            Full staging area
                        </a>
                    </li>
                    <li>
                        <a className={ active === 5 ? facilityStyles.active : ''} onMouseOver={ ()=>{ area(5) } } onFocus={ () => { area(5) } } href="###">
                            Electric equipment
                        </a>
                    </li>

                    <li>
                        <a className={ active === 6 ? facilityStyles.active : ''} onMouseOver={ ()=>{ area(6) } } onFocus={ () => { area(6) } } href="###">
                            17 docks
                        </a>
                    </li>
                    <li>
                        <a className={ active === 7 ? facilityStyles.active : ''} onMouseOver={ ()=>{ area(7) } } onFocus={ () => { area(7) } } href="###">
                            Truck packing
                        </a>
                    </li>
                    <li>
                        <a className={ active === 8 ? facilityStyles.active : ''} onMouseOver={ ()=>{ area(8) } } onFocus={ () => { area(8) } } href="###">
                            Refrigerated transportation
                        </a>
                    </li>
                    <li>
                        <a className={ active === 9 ? facilityStyles.active : ''} onMouseOver={ ()=>{ area(9) } } onFocus={ () => { area(9) } } href="###">
                            USDA exporting plant
                        </a>
                    </li>
                    <li>
                        <a className={ active === 10 ? facilityStyles.active : ''} onMouseOver={ ()=>{ area(10) } } onFocus={ () => { area(10) } } href="###">
                            In - House custom agency
                        </a>
                    </li>
                </ol>
            </Column>
            <Column size={9} mobile={4}>
                { image }
            </Column>
        </Row>
    )
}

export default Facilities