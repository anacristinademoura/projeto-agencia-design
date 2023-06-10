import React from 'react'
import './style.css'
import Logo from '../../assets/logo.png';
import iconeFacebook from '../../assets/facebook.png';
import iconeTwitter from '../../assets/twitter.png';
import iconeLinkedin from '../../assets/linkedin.png';
import iconeDribble from '../../assets/dribble.png';
import iconeBehance from '../../assets/behance.png';
import iconeGooglePlus from '../../assets/google-plus.png';

const Rodape = (props) => {
    return (
        <footer className={props.modoEscuro ? 'rodape-modo-escuro' : 'rodape-modo-claro'}>
            <img src={Logo} alt="logotipo" />
            <p className='paragrafo'>
                Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                ferramentas e tecnologias personalizadas.</p>
            <div className='iconesRodape'>
                <img src={iconeFacebook} alt="facebook" />
                <img src={iconeTwitter} alt="twitter" />
                <img src={iconeLinkedin} alt="linkedin" />
                <img src={iconeDribble} alt="dribble" />
                <img src={iconeBehance} alt="behance" />
                <img src={iconeGooglePlus} alt="google plus" />
            </div>

            <p className='copyright'>Copyright 2022 &copy; <span>Ana Cristina</span></p>
        </footer>
    )
}

export default Rodape