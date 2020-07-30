import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ( {setCategories} ) => { //recibimos la propiedad setCategories del componente Padre
   
    const [inputValue, setInputValue] = useState(''); //asignamos valor vacio inicial

    const handleInputChange = (e) => {   //recogemos los cambios del evento Onchange del input

        setInputValue( e.target.value );
    }

    const handleSubmit = (e) =>{    //recogemos el evento submit del form pero cancelamos el event default de recargar la pagina
        e.preventDefault();

        if ( inputValue.trim().length > 2 ){    //La longitud del valor ingreso debe ser mayor a 2 letras
            setCategories( cats => [inputValue, ...cats] );  //llamamos la propiedad padre para comunicarlo con el valor del input de este component
            setInputValue(''); //vaciamos la caja de texto
        }
        
        
        
    }

    return (  //evento de guar cambios
        <form onSubmit = { handleSubmit }>  
           <input 
                type="text"
                value={ inputValue }  //valor inicial vacio
                onChange={ handleInputChange }   //se ejecuta cada que la caja de texto cambie 
           /> 
        </form>
    )
}

AddCategory.propTypes ={  //propiedad requerida
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
