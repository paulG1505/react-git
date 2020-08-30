import React from 'react'
import PropTypes from 'prop-types'
//impt snnipet

export const GifGridItem = ({url,title}) => {
    return (
        <div className="card animate__animated animate__backInRight">
            <img
                src={url} height='120px'
                // titulo alternativo
                alt={title}
            />
            <br/>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes={
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
}