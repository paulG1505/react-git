import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import React from 'react'
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas a GridItem', () => {
    //renderizar el componente
    const wrapper=shallow(<GifGridItem title={'Hola'} url={'https://'} />)
    test('Debe mostrar el componente correctamente', () => {
        //comparamos con el snapshot
        //para actualizar un snapshot usar la tecla 'u'
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe tener un parrafo con el titulo', () => {
        //buscamos el parrafo
        const p=wrapper.find('p')
        //a este texto sin espacios lo comparamos con el titulo que mandamos
        expect(p.text().trim()).toBe('Hola')
    })
    test('Debe ser una imagen, tener url y tener titulo alternativo', () => {
        const img=wrapper.find('img')
        //analizar las propiedades img.props
        expect(img.prop('src')).toBe('https://')
        //comprueba el texto alternativo
        expect(img.prop('alt')).toBe('Hola')
    })
    test('Debe tener la animacion fadeIn', () => {
        const div=wrapper.find('div')
        const animated='animate__backInRight'
        //compromamos que tenga esa animacion siempre
        expect(div.prop('className').includes(animated)).toBe(true)
    })
    
})

