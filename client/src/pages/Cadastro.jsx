import { Link } from 'react-router-dom'

import styles from './Entrar_Cadastro.module.css'

function Entrar() {
    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
                    </svg>
                </Link>
                <div className={styles.button}>
                    <Link to='/entrar'>Entrar</Link>
                </div>
            </header>
            <main className={styles.main}>
                <h1>Crie o seu perfil</h1>
                <input type="text" placeholder='Idade'/>
                <input type="text" placeholder='Nome (opcional)' />
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Senha'/>
                <button>criar conta</button>

                <div className={styles.divisao}>
                    <div className={styles.line}></div>
                    <p>OU</p>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.btn_rede}>
                    <button>
                        <svg width="12" height="22" viewBox="0 0 12 22" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Fill 4</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#3C5A99"><g><g><path d="M7.275 21.584v-9.845h3.305l.495-3.837h-3.8v-2.45c0-1.111.309-1.868 1.902-1.868l2.032-.001V.15C10.857.104 9.65 0 8.249 0c-2.93 0-4.936 1.788-4.936 5.072v2.83H0v3.837h3.313v9.845h3.962z"/></g></g></g></g></svg>
                        facebook
                    </button>
                    <button id={styles.btn_google}>
                        <svg width="20" height="21" viewBox="0 0 20 21" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>G Copy</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M10.123 4.023c1.483 0 2.812.512 3.86 1.512l2.893-2.899C15.127 1.002 12.846 0 10.123 0 6.18 0 2.766 2.269 1.105 5.573l3.367 2.619c.796-2.393 3.024-4.169 5.651-4.169z" fill="#EB4335"/><path d="M19.815 10.345c0-.724-.068-1.417-.185-2.084h-9.507v3.874h5.44a4.674 4.674 0 0 1-2.021 3.11l3.27 2.544c1.906-1.761 3.003-4.365 3.003-7.444" fill="#4285F4"/><path d="M10.123 20.23c2.724 0 5.018-.896 6.69-2.441l-3.271-2.544c-.902.608-2.062.962-3.419.962-2.627 0-4.855-1.775-5.65-4.168l-3.368 2.618c1.66 3.305 5.074 5.574 9.018 5.574" fill="#34A853"/><path d="M1.105 14.657l3.367-2.618a6.089 6.089 0 0 1-.313-1.924c0-.668.111-1.315.313-1.923L1.105 5.573A10.088 10.088 0 0 0 .03 10.115v.001c0 1.634.389 3.176 1.075 4.541" fill="#FBBC05"/></g></g></svg>
                        google
                    </button>
                </div>

                <div className={styles.txt_footer}>
                    <p>Ao entrar no Duolingo, você concorda com os nossos <span>Termos</span> e <span>Política de Privacidade</span>.</p>
                </div>
            </main>
            
        </div>
    )
}

export default Entrar