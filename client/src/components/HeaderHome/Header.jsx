import {Link} from 'react-router-dom'
import { useState } from 'react'

import styles from './Header.module.css'

/* SVG */
import LOGO from '../../assets/svg/logo.svg'

function Header() {
    const [button, setButton] = useState('')
    let altura = 750
    let fim = 2200

    const buttonHeader = () => {

        window.scrollY >= altura & window.scrollY <= fim
        ? setButton('activeButton')
        : setButton('');
       
    }

    window.addEventListener('scroll', buttonHeader);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to='/'>
                    <img src={LOGO} alt="logo" />
                </Link>
                <div className={styles.idiomas}>
                    <p>
                        idioma do site: português
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                        <path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
                    </svg>
                    <div className={styles.buttons} id={button ? 'activeButton' : 'button'}>
                        <Link to='/idiomas'><button id={styles.btnGreen}>Comece agora</button></Link>
                        <Link to='/entrar'><button>entrar</button></Link>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header