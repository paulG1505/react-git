import React,{useState} from 'react'
import PropTypes from 'prop-types'

export const CategoryAdd = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')
    const handleInput=({target})=>{
        //en el target esta el valor
        setInputValue(target.value);
    }
    const handleSubmit=(e)=>{
        //prevenir el volver a cargar la pagina
        e.preventDefault()
        //para que no envie vacio
        if(inputValue.trim().length>1){

            //copia de lo que tiene el arreglo e incrementa primero
            setCategories(cat=>[inputValue,...cat])
            setInputValue('')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInput}
            />
        </form>
    )
}
//para que sea obigatorio el enviar
CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}
