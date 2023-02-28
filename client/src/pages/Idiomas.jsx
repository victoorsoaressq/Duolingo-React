import styles from './Idiomas.module.css'

import Header from "../components/HeaderHome/Header";

/* ICONES */
import EN from '../assets/img/en.png'
import ES from '../assets/img/es.png'
import FR from '../assets/img/fr.png'
import DE from '../assets/img/de.png'
import IT from '../assets/img/it.png'
import EO from '../assets/img/eo.png'

function Idiomas() {
    return (
        <div>
            <Header />
            <div className={styles.idiomas}>
                <h1>Eu quero aprender...</h1>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <img src={EN} alt="inglês" />
                        <h2>Inglês</h2>
                        <p>14,6 mi alunos</p>
                    </div>
                    <div className={styles.box}>
                        <img src={ES} alt="Espanhol" />
                        <h2>Espanhol</h2>
                        <p>3,50 mi alunos</p>
                    </div>
                    <div className={styles.box}>
                        <img src={FR} alt="Francês" />
                        <h2>Francês</h2>
                        <p>1,76 mi alunos</p>
                    </div>
                    <div className={styles.box}>
                        <img src={IT} alt="Italiano" />
                        <h2>Italiano</h2>
                        <p>1,13 mi alunos</p>
                    </div>
                    <div className={styles.box}>
                        <img src={DE} alt="Alemão" />
                        <h2>Alemão</h2>
                        <p>694 mil alunos</p>
                    </div>
                    <div className={styles.box}>
                        <img src={EO} alt="Esperanto" />
                        <h2>Esperanto</h2>
                        <p>147 mil alunos</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Idiomas