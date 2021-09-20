import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GitGridItem } from './GitGridItem';

export const GitGrid = ({category}) => {
    const {loading, data:images} = useFetchGifs(category);
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            { loading && <p className='animate__animated animate__flash'>Loading</p> }
            <div className='card-grid'>  
                {
                    images.map( img =>(
                        <GitGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
