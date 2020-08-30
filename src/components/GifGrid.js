import React from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { loading, data } = useFetchGifs(category);
    return (
        <>
            <h3 className="animate__animated animate__fadeInDown" >{category}</h3>
            {loading ? 'Cargando...' :

                <div className="card-grid">

                    {/* al objeto lo descomponemos */}
                    {
                        data.map((img) => (
                            <GifGridItem
                                {...img}
                                key={img.id}
                            />
                        ))
                    }
                </div>
            }
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,

}