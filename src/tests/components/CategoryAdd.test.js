const { shallow } = require("enzyme")
const { CategoryAdd } = require("../../components/CategoryAdd")
import '@testing-library/jest-dom'
import React from 'react'

describe('Pruebas al agregar categorias ', () => {

    //le mando una funcion porque es requerida 
    const setCategories=jest.fn()//esto es una funcion de jest 
    let wrapper = shallow(<CategoryAdd setCategories={setCategories} />)
    //bucle para resetear el wrapper 
    beforeEach(()=>{
        jest.clearAllMocks();//limpia simulaciones
        wrapper = shallow(<CategoryAdd setCategories={setCategories} />)//reset wrapper
    })

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    //simular que la caja de texto cambia
    test('Debe cambiar la caja de texto', () => {
        const input=wrapper.find('input')
        const value='homero'
        //simulacion de la caja
        input.simulate('change',{target :{value}})
    })
    test('Comprobar que entre al submit', () => {
        //simular envio de formulario
        wrapper.find('form').simulate('submit',{preventDefault(){}})//enviamos el prevent
        //comprobar si no se ha llamado a setCategories
        expect(setCategories).not.toHaveBeenCalled();
    })
    test('Debe llamar al setCategories y limpiar la caja de texto', () => {
        const input=wrapper.find('input')
        const value='Hola'
        //simulando si cambia el input
        input.simulate('change',{target :{value}})
        //simulando envio de formulario
        wrapper.find('form').simulate('submit',{preventDefault(){}})//enviamos el prevent
        //comprobamos si se llamo a set categories
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));//comprobamos que se llame con funcion
        //toHaveBeenCalledTimes(numero de veces que quiero llamar)
        //comprobamos si se limpio el input
        expect(input.prop('value')).toBe('')
    })
    

})
