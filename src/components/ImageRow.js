import React from 'react'
import * as rowStyles from './styles/grid.module.scss'

function ImageRow( props ) {
    return (
        <div className={ rowStyles.image_row + ' ' + props.className }>
            <div className={ rowStyles.image_row_inner }>
                { props.children }
            </div>
        </div>
    )
}

export default ImageRow
