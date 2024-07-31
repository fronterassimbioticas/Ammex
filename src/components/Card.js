import React from "react";

import * as cardStyles from './styles/card.module.scss'

function Card(props){
    return(
        <div className={ cardStyles.card }>
            { props.children }
        </div>
    )
}

export default Card;