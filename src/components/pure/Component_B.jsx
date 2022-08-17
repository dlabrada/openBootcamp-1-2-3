import React from 'react'
import PropTypes from 'prop-types'
import {Contacto} from '../../models/contacto.class'
import { useState } from 'react'

const Component_B = ({Contacto}) => {

    const [conectado,setConectado]= useState(Contacto.conectado)
    const cambiar=()=>{
    conectado?setConectado(false):setConectado(true)
    }
  return (
    <div>
        <button onClick={()=>cambiar()}>Cambiar Estado</button>
        <hr />
        <h5>
      {Contacto.nombre}
     <br />
      {Contacto.apellido}
      <br />
      {Contacto.email}
     <br />
      {
      conectado?("En Linea"):("No Disponible")}
       </h5>
    </div>
  )
}

Component_B.propTypes = {
    Task:PropTypes.instanceOf(Contacto)
}

export default Component_B