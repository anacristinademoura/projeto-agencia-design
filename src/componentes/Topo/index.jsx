import React from 'react'
import './style.css'
import Logo from '../../assets/logo.png';
import iconeLua from '../../assets/moon.png';
import iconeSol from '../../assets/sun.png';

const Topo = (props) => {
    return (
        <header className={props.modoEscuro ? 'topo-modo-escuro' : 'topo-modo-claro'}>
            <img className="logo" src={Logo} alt='logotipo' />
            <button onClick={props.alterarModo} className={props.modoEscuro ? 'btn-modo-escuro' : 'btn-modo-claro'}>
                <img className='iconesBtn' src={props.modoEscuro ? iconeSol : iconeLua} alt="icone" />
            </button>
        </header>
    )
}

export default Topo