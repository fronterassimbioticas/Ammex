import React from 'react'
import * as rowStyles from './styles/grid.module.scss'

function Row( props ) {

    let padding;
    switch(props.padding){
        case "b":
            padding = rowStyles.pb0
            break
        case "t":
            padding = rowStyles.pt0
            break
        case "tb":
            padding = rowStyles.p0
            break
        case "small":
            padding = rowStyles.small
            break
        case "large":
            padding = rowStyles.large
            break
        default:
            padding = rowStyles.normal
            break

    }

    return (
        <div className={ rowStyles.row + ' ' + padding + ' ' + props.className }>
            { props.children }
        </div>
    )
}

export default Row
