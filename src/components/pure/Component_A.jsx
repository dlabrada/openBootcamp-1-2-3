import React from 'react'
import ComponentB from './Component_B'
import {Contacto} from '../../models/contacto.class'
import PropTypes from 'prop-types'

const Component_A = () => {

const contactoNew = new Contacto("Diego","labrada","dlabrada@tekchile.cl",false)
  return (

    <div>
        <h3 >Datos del Contacto</h3>
        <ComponentB Contacto={contactoNew}/>
    </div>
   
  )
}
Component_A.propTypes = {
    Task:PropTypes.instanceOf(Contacto)
}

export default Component_A
