import React from 'react'

export const GifGridItem = ({url,title}) => {
    return (
        <div className="card animate__animated animate__backInRight">
            <img
                src={url} height='100px'
                alt={title}
            />
            <br/>
            <p>{title}</p>
        </div>
    )
}
