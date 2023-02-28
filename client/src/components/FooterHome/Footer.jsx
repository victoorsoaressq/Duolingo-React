import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.title}>
                <h2>Aprenda um idioma com o Duolingo!</h2>
                <Link to='/idiomas'>comece agora</Link>
            </div>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h3>Quem somos</h3>
                    <p>Cursos</p>
                    <p>Missão</p>
                    <p>Método</p>
                    <p>Eficácia</p>
                    <p>Equipe</p>
                    <p>Pesquisa</p>
                    <p>Carreira</p>
                    <p>Guia de marca</p>
                    <p>Loja</p>
                    <p>Impresa</p>
                    <p>Investidores</p>
                    <p>Entre em contato</p>
                </div>
                <div className={styles.box}>
                    <h3>Produtos</h3>
                    <p>Duolingo</p>
                    <p>Duolingo for Schools</p>
                    <p>Duolingo English Test</p>
                    <p>Podcast</p>
                    <p>Histórias</p>
                    <p>Duolingo for Business</p>
                    <p>Super Duolingo</p>
                    <p>Dê o Super Duolingo <br /> de presente</p>
                </div>
                <div className={styles.box}>
                    <h3>Aplicativos</h3>
                    <p>Duolingo para <br />Android</p>
                    <p>Duolingo para iOS</p>
                </div>
                <div className={styles.box}>
                    <h3>Ajuda e suporte</h3>
                    <p>Dúvidas: Duolingo</p>
                    <p>Dúvidas: Escolas</p>
                    <p>Dúvidas: Duolingo <br /> English Test</p>
                    <p>Status</p>
                </div>
                <div className={styles.box}>
                    <h3>Termos e <br />privacidade</h3>
                    <p>Normas da comunidade</p>
                    <p>Termos de uso</p>
                    <p>Privacidade</p>

                    <h3>Social</h3>
                    <p>Blog</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>YouTube</p>
                </div>
            </div>
            <div className={styles.divisao}></div>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div>
                        <h3 id={styles.new_h3}>Idioma do site:</h3>
                    </div>
                    <div className={styles.idiomas}>
                        <p>العربية</p>
                        <p>বাংলা</p>
                        <p>Čeština</p>
                        <p>Deutsch</p>
                        <p>Ελληνικά</p>
                        <p>English</p>
                        <p>Español</p>
                        <p>Français</p>
                        <p>हिंदी</p>
                        <p>Magyar</p>
                        <p>Bahasa Indonesia</p>
                        <p>Italiano</p>
                        <p>日本語</p>
                        <p>한국어</p>
                        <p>Nederlands</p>
                        <p>Polski</p>
                        <p>Português</p>
                        <p>Română</p>
                        <p>Русский</p>
                        <p>ภาษาไทย</p>
                        <p>Tagalog</p>
                        <p>Türkçe</p>
                        <p>Українською</p>
                        <p>Tiếng Việt</p>
                        <p>中文</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer