import React from 'react'
import './style.css'


const Card = (props) => {
  return (
    <div id="card" className={props.modoEscuro ? 'card-modo-escuro' : 'card-modo-claro'}>
        <p className='primeiro-paragrafo'>{props.data}</p>
        <h4>{props.titulo}</h4>
        <p className='segundo-paragrafo'>{props.empresa}</p>
        <p>{props.descricao}</p>
    </div>
  )
}

export default Card