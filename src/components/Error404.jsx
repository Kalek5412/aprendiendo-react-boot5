import React from 'react'
import error404 from '../images/error404.png'

export const Error404 = () => {
  return (
    <div className='container'>
      <center>
        <br />
        <h1>pagina no encontrada</h1>
        <img src={error404} alt="" />
      </center>
    </div>
  )
}
