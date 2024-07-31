import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

function Check(props) {
    return (
        <li>
            <StaticImage
                src="../images/check-ammex.png"
                alt="check"
                placeholder="tracedSVG"
                width={ 25 }
                className="checkMark"
            />
            { props.children }
        </li>
    )
}

export default Check
