import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import React from 'react'
import GitExpertApp from '../GitExpertApp';

describe('Pruebas a GitExpertApp', () => {
    test('Renderizado el componente con snapshot', () => {
        const wrapper=shallow(<GitExpertApp/>)
        expect(wrapper).toMatchSnapshot()
    })
    test('Comprobamos que existan categorias iniciales', () => {
        const categories=['Homer']
        const wrapper=shallow(<GitExpertApp defaultCategories={categories}/>)
        expect(wrapper).toMatchSnapshot()//comprobamos que exista
        //comprobamos que el initialState
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    
})
