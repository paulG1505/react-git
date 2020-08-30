const { shallow } = require("enzyme")
import '@testing-library/jest-dom'
import React from 'react'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas a GifGrid', () => {


    test('Comprobacion snapshot', () => {
        //simulando hook
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category='Hola' />)
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe mostrar items cuando llegan las imagenes del useFetch', () => {
        //se debe simular comportamiento del hook por lo que se usa mock
        useFetchGifs.mockReturnValue({
            data: [{ id: '1', title: 'ho', url: 'https://' }],
            loading: false
        })
        
        const wrapper = shallow(<GifGrid category='Hola' />)
        //expect(wrapper).toMatchSnapshot();//evaluamos frente a la fotografia
        //evaluamos si no existe el loading
        expect(wrapper.find('p').exists()).toBe(false)
        //evaluamos que exista el grid item de acuerdo a los gifs que tenemos
        expect(wrapper.find('GifGridItem').length).toBe(1);
    })

})
