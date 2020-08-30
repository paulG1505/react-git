//rafc sinnipet
import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd'
import { GifGrid } from './components/GifGrid'
//le mandamos unas categorias por defecto
export const GitExpertApp = ({defaultCategories=[]}) => {
    const [categories, setCategories] = useState(defaultCategories)
    

    return (
        <div>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={setCategories} />
            <hr />

            <ol>
                {/* recorrer el arreglo con map  recibe obj y 
                lo ponemos como key*/}
                {
                    categories.map(category => (
                        <GifGrid 
                        key={category}
                        category={category} />
                    ))
                }
            </ol>
        </div>
    )
}

export default GitExpertApp
