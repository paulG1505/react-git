//rafc sinnipet
import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd'
import { GifGrid } from './components/GifGrid'

const GitExpertApp = () => {
    const [categories, setCategories] = useState([''])
    // const handleAdd=()=>{
    //     const n='asd'
    //     //agregando elemento en un arreglo
    //     setCategories([...categories,n])
    // }

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
