import React from 'react'
import { useFetchGifs } from '../hooks/useFechGifs'
import GifGridItem from './GifGridItem';

//Coleccion de elementos que van a coincidir con la categoria  

const GifGrid = ({ category }) => { //recibo categoria y hago peticion http

    const { data: images, loading } = useFetchGifs( category );
    
    console.log(loading);

    return (
        <>
            <h3 className="animate__animated animate__headShake">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                
                {

                    images.map( img => (
                        <GifGridItem 
                        key={ img.id }
                        { ... img }
                        />
                    ))

                    }
                
            </div>      
        </>       
    )
}

export default GifGrid
