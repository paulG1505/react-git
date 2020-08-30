import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import React from 'react'
import { GifGridItem } from '../../components/GifGridItem';
const { getGifs } = require("../../helpers/getGifs")

describe('Pruebas a getGifs', () => {
    test('Debe traer 10 elementos', async () => {
        const gifs= await getGifs('Homero')   
        //comprobamos que lleguen 10 elementos  
        expect(gifs.length).toBe(10)
    })
    test('si se envia vacio no debe traer nada', async () => {
        const gifs= await getGifs('')     
        expect(gifs.length).toBe(0)
    })
    
})
