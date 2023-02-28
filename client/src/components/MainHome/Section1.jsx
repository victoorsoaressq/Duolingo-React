import { Link } from 'react-router-dom'

import styles from './Section1.module.css'

/* SVG */
import GLOBO from '../../assets/svg/globo.svg'
import LEFT from '../../assets/svg/arrow_back.svg'
import RIGHT from '../../assets/svg/arrow_forward.svg'

/* ICONES */
import EN from '../../assets/img/en.png'
import ES from '../../assets/img/es.png'
import FR from '../../assets/img/fr.png'
import DE from '../../assets/img/de.png'
import IT from '../../assets/img/it.png'

function Section1() {
    return(
        <div className={styles.inicio}>
            <div className={styles.center}>
                <img src={GLOBO} alt="globo" />
                <div className={styles.descritivo}>
                    <h1>O jeito grátis, divertido e eficaz de aprender um idioma!</h1>
                    <Link to='/idiomas' id={styles.btnGreen2}>comece agora</Link>
                    <Link to='/entrar'>já tenho uma conta</Link>
                </div>
            </div>
            <div className={styles.footer}>
                <img src={LEFT} alt="arrow_left" className={styles.arrow}/>
                <div className={styles.box_icons}>
                    <div className={styles.icon}>
                        <img src={EN} alt="inglês" />
                        <p>inglês</p>
                    </div>
                    <div className={styles.icon}>
                        <img src={ES} alt="espanhol" />
                        <p>espanhol</p>
                    </div>
                    <div className={styles.icon}>
                        <img src={FR} alt="francês" />
                        <p>francês</p>
                    </div>
                    <div className={styles.icon}>
                        <img src={DE} alt="alemão" />
                        <p>alemão</p>
                    </div>
                    <div className={styles.icon}>
                        <img src={IT} alt="italiano" />
                        <p>italiano</p>
                    </div>
                </div>
                <img src={RIGHT} alt="arrow_right" className={styles.arrow} />
            </div>
        </div>
    )
}

export default Section1