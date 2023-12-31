import React from 'react'
import './style.css'

import Card from '../Card'

const SecaoExperienciaTrabalho = (props) => {
    return (
        <section id="secaoExpDeTrab" className={props.modoEscuro ? 'secao-modo-escuro' : 'secao-modo-claro'}>
            <div id="container-texto" className={props.modoEscuro ? 'container-texto-modo-escuro' : 'container-texto-modo-claro'}>
                <h2>Experiências De Trabalho</h2>
                <p>
                    Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.
                </p>
            </div>

            <div className='container-cards limita-secao'>
                <Card
                    data="JUNHO 2012 - 2016"
                    titulo="Web Designer"
                    empresa="Pied Piper StartUp."
                    descricao="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                    modoEscuro={props.modoEscuro}
                
                />

                <Card
                    data="AGOSTO 2016 - 2019"
                    titulo="Product Designer"
                    empresa="E Corp."
                    descricao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                    modoEscuro={props.modoEscuro}
                />

                <Card
                    data="FEVEREIRO 2019 - 2021"
                    titulo="Digital Consulting"
                    empresa="Digital Consulting"
                    descricao="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                    modoEscuro={props.modoEscuro}
                />
            </div>
        </section>
    )
}

export default SecaoExperienciaTrabalho