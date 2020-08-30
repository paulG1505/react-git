const { shallow } = require("enzyme")
import '@testing-library/jest-dom'
import React from 'react'
//render para hacer testing de hooks
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Pruebas al hook', () => {



    test('Comprobando que informacion trae',async () => {
        //vemos lo que trae en result
        const {result,waitForNextUpdate} =renderHook(()=>useFetchGifs(''))
        const{data,loading}=result.current;
        //llamado del fetch
        await waitForNextUpdate();
        //evaluamos lo que trae
        expect(data).toEqual([])
        expect(loading).toBe(false)
    })
    test('Comprobando que el arreglo traiga datos', async() => {
       
        //funcion para que vuelva una promesa
        const {result,waitForNextUpdate} =renderHook(()=>useFetchGifs('Homer'))
        await waitForNextUpdate();
        const{data,loading}=result.current;
        //comparar la data que llega si tiene 10 elementos
        expect(data.length).toBe(10)
        expect(loading).toBe(false)
    })
    
})
