import React from 'react'
import * as columnStyles from './styles/grid.module.scss'

function Column( props ) {

    let size;
    switch(props.size){
        case 0:
            size = columnStyles.none
            break
        case 1:
            size = columnStyles.col_1
            break
        case 2:
            size = columnStyles.col_2
            break
        case 3:
            size = columnStyles.quarter
            break
        case 4:
            size = columnStyles.col_4
            break
        case 5:
            size = columnStyles.col_5
            break
        case 6:
            size = columnStyles.half
            break
        case 7:
            size = columnStyles.col_7
            break
        case 8:
            size = columnStyles.col_8
            break
        case 9:
            size = columnStyles.col_9
            break
        case 10:
            size = columnStyles.col_10
            break
        case 11:
            size = columnStyles.col_11
            break
        default: 
            size = columnStyles.single
            break
    }

    let padding;
    switch(props.padding){
        case "0":
            padding = columnStyles.cp0
            break
        case "m0":
            padding = columnStyles.mp0
            break
        case "large":
            padding = columnStyles.cpl
            break
        default: 
            break
    }

    let mobileSize;
    switch(props.mobile){
        case 1:
            mobileSize = columnStyles.m_quarter
            break
        case 2:
            mobileSize = columnStyles.m_half
            break
        case 3:
            mobileSize = columnStyles.m_col_3
            break
        case 4:
            mobileSize = columnStyles.m_full
            break
        default:
            mobileSize = ''
            break
    }

    return (
        <div className={ size + ' ' + mobileSize + ' ' + columnStyles.column + ' ' + props.className + ' ' + padding }>
            { props.children }
        </div>
    )
}

export default Column
