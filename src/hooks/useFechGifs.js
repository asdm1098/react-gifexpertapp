import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) =>{
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () =>{       //Solo se ejecute cuando cambie la categoria

        getGifs( category )  //Hace la peticion Http
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                });

            })
        

    }, [category])

    
    return state; //{data:[], loading: true};

}