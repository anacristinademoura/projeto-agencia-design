import React from 'react'
import './style.css'


const SecaoBanner = (props) => {
  return (
    <section id='secao-banner'>
        <div id='imagemDeFundo' className={props.modoEscuro ? 'fundo-modo-escuro' : 'fundo-modo-claro'}></div>
        <div className='texto-secaoBanner'>
            <p>BRANDING / UI / UX / TECNOLOGIA</p>
            <h2>Agência de Branding</h2>
            <span>e design digital</span>
        </div>
    </section>
  )
}

export default SecaoBanner