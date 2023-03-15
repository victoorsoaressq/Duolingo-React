import styles from './Section2.module.css'

/* SVG */
import SVG1 from '../../assets/svg/duolingo_pet.svg'
import SVG2 from '../../assets/svg/duolingo_super.svg'
import SVG3 from '../../assets/svg/notebook.svg'
import SVG4 from '../../assets/svg/duolingo_professor.svg'
import SVG5 from '../../assets/svg/duolingo_medalha.svg'
import SVG6 from '../../assets/svg/duolingo_mochila.svg'
import FOGO from '../../assets/svg/foguinho.svg'
import NOTEBOOK from '../../assets/svg/notebook2.svg'
import CHECK from '../../assets/svg/check.svg'
import COROA from '../../assets/svg/coroa.svg'
import MENINA from '../../assets/svg/menininha.svg'


function Section2() {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <img src={SVG1} alt="duolingo pet" />
                    <div className={styles.descritivo}>
                        <h2>A melhor maneira do mundo de aprender idiomas</h2>
                        <p>
                            Aprender com o Duolingo é divertido, e <span className={styles.span2}>pesquisas comprovam que funciona mesmo</span>! Com lições rápidas e curtinhas, você ganha pontos e desbloqueia novos níveis enquanto aprende a se comunicar na vida real.
                        </p>
                    </div>
                </div>
                <div className={styles.divisao}></div>

                <div className={styles.box} id={styles.box_direction}>
                    <div className={styles.titulo}>
                        <h2>Coisas que vão fazer você amar o Duolingo</h2>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.cont_box}>
                            <div className={styles.cont_descritivo}>
                                <img src={FOGO} alt="foguinho" />
                                <div className={styles.box_descritivo}>
                                    <h3>Eficaz e eficiente</h3>
                                    <p>
                                        Os nossos cursos ensinam habilidades de leitura, escuta e fala de forma eficaz e eficiente. Confira as últimas pesquisas sobre o assunto!
                                    </p>
                                </div>
                            </div>
                            <div className={styles.cont_descritivo}>
                                <img src={CHECK} alt="check" />
                                <div className={styles.box_descritivo}>
                                    <h3>Eficaz e eficiente</h3>
                                    <p>
                                        Com a combinação do melhor da inteligência artificial e da ciência da linguagem, as lições são feitas sob medida para ajudar você a aprender no nível e ritmo certos.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className={styles.cont_img}>
                            <img src={NOTEBOOK} alt="notebook2" />
                        </div>
                        <div className={styles.cont_box}>
                            <div className={styles.cont_descritivo}>
                                <img src={COROA} alt="coroa" id={styles.iconImg} />
                                <div className={styles.box_descritivo}>
                                    <h3>Eficaz e eficiente</h3>
                                    <p>
                                        Fica fácil criar o hábito de aprender idiomas com recursos que parecem de jogo! Para ajudar ainda mais, temos desafios divertidos e lembretes do nosso mascote simpático, a coruja Duo.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.cont_descritivo}>
                                <img src={MENINA} alt="menina" id={styles.iconImg2} />
                                <div className={styles.box_descritivo}>
                                    <h3>Eficaz e eficiente</h3>
                                    <p>
                                        Aprender de verdade não precisa ser chato! Melhore as suas habilidades todos os dias com exercícios envolventes e personagens interessantes.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.box} id={styles.box_direction2}>
                    <div className={styles.cont_img}>
                        <img src={NOTEBOOK} alt="notebook2" />
                    </div>
                    <div className={styles.titulo}>
                        <h2>Coisas que vão fazer você amar o Duolingo</h2>
                    </div>
                    <div className={styles.cont_box}>
                        <div className={styles.cont_descritivo}>
                            <img src={FOGO} alt="foguinho" />
                            <div className={styles.box_descritivo}>
                                <h3>Eficaz e eficiente</h3>
                                <p>
                                    Os nossos cursos ensinam habilidades de leitura, escuta e fala de forma eficaz e eficiente. Confira as últimas pesquisas sobre o assunto!
                                </p>
                            </div>
                        </div>
                        <div className={styles.cont_descritivo}>
                            <img src={CHECK} alt="check" />
                            <div className={styles.box_descritivo}>
                                <h3>Eficaz e eficiente</h3>
                                <p>
                                    Com a combinação do melhor da inteligência artificial e da ciência da linguagem, as lições são feitas sob medida para ajudar você a aprender no nível e ritmo certos.
                                </p>
                            </div>
                        </div>
                        <div className={styles.cont_descritivo}>
                            <img src={COROA} alt="coroa" id={styles.iconImg} />
                            <div className={styles.box_descritivo}>
                                <h3>Eficaz e eficiente</h3>
                                <p>
                                    Fica fácil criar o hábito de aprender idiomas com recursos que parecem de jogo! Para ajudar ainda mais, temos desafios divertidos e lembretes do nosso mascote simpático, a coruja Duo.
                                </p>
                            </div>
                        </div>
                        <div className={styles.cont_descritivo}>
                            <img src={MENINA} alt="menina" id={styles.iconImg2} />
                            <div className={styles.box_descritivo}>
                                <h3>Eficaz e eficiente</h3>
                                <p>
                                    Aprender de verdade não precisa ser chato! Melhore as suas habilidades todos os dias com exercícios envolventes e personagens interessantes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.divisao}></div>

                <div className={styles.box}>
                    <img src={SVG2} alt="duolingo super" id={styles.imgH} />
                    <div className={styles.descritivo}>
                        <h2>Turbine o seu aprendizado com o Super Duolingo</h2>
                        <p>
                            Aprender um idioma no Duolingo é 100% grátis, mas você pode remover os anúncios e apoiar a educação gratuita com o Super. As primeiras 2 semanas são por nossa conta!
                        </p>
                        <p id={styles.p}>SAIBA MAIS SOBRE O SUPER DUOLINGO</p>
                    </div>
                </div>
                <div className={styles.divisao}></div>

                <div className={styles.box}>
                    <img src={SVG6} alt="duolingo mochila" id={styles.imgH2_active} />
                    <div className={styles.descritivo}>
                        <h2>Aprenda onde e quando quiser</h2>
                        <p>
                            Use o seu tempo livre de forma mais produtiva com os aplicativos para iPhone e Android. Faça o download e entenda por que conquistamos os maiores prêmios da Apple e do Google.
                        </p>
                        <div className={styles.buttons}>
                            <button>
                                <svg viewBox="0 0 37 37" xmlns="http://www.w3.org/2000/svg"><path d="M26.9039 19.1188C26.9363 16.611 28.2528 14.2945 30.3922 12.981C29.0364 11.0473 26.8469 9.86522 24.4843 9.7914C21.9986 9.53084 19.5888 11.2768 18.3221 11.2768C17.0309 11.2768 15.0807 9.81727 12.9806 9.86042C10.2174 9.94957 7.7038 11.4804 6.35946 13.8929C3.49663 18.8428 5.63205 26.1174 8.3744 30.1184C9.74645 32.0776 11.35 34.2661 13.4482 34.1885C15.5014 34.1035 16.2682 32.881 18.7466 32.881C21.202 32.881 21.9215 34.1885 24.0623 34.1392C26.2655 34.1035 27.6536 32.1713 28.9775 30.1935C29.9633 28.7975 30.7219 27.2546 31.2252 25.622C28.6084 24.5167 26.907 21.9562 26.9039 19.1188V19.1188Z"></path><path d="M22.8604 7.16005C24.0617 5.71991 24.6535 3.86887 24.5102 2C22.6749 2.1925 20.9796 3.06846 19.7621 4.45334C18.5599 5.81971 17.9508 7.60728 18.0691 9.42235C19.929 9.44147 21.6949 8.60765 22.8604 7.16005V7.16005Z"></path>
                                </svg>
                                <p>
                                    Baixe na <br />
                                    <span id={styles.btnP}>App Store</span>
                                </p>
                            </button>
                            <button>
                                <svg viewBox="0 0 37 37" xmlns="http://www.w3.org/2000/svg"><title>badge-app-store</title><path fill-rule="evenodd" clip-rule="evenodd" d="M3.80942 4.3203C3.80942 4.09554 3.82731 3.88521 3.86151 3.69016L17.8617 18.4703L3.83906 33.2741C3.81952 33.1218 3.80942 32.961 3.80942 32.792V4.3203ZM5.35237 35.0876C5.86758 35.1708 6.47838 35.0454 7.13188 34.6805L24.1811 25.1417L19.4773 20.1758L5.35237 35.0876ZM21.0928 18.4703L26.2937 23.9609L32.63 20.4164C34.4567 19.393 34.4567 17.7194 32.63 16.6985L26.1861 13.0933L21.0928 18.4703ZM24.0742 11.9117L7.13188 2.43299C6.60625 2.13818 6.10808 1.99915 5.66613 1.99915C5.60892 1.99915 5.55264 2.00146 5.49734 2.00606L19.4773 16.7648L24.0742 11.9117Z"></path></svg>
                                <p>
                                    DISPONÍVEL NO <br />
                                    <span id={styles.btnP}>Google Play</span>
                                </p>
                            </button>
                        </div>
                    </div>
                    <img src={SVG6} alt="duolingo mochila" id={styles.imgH2} />
                </div>
                <div className={styles.divisao}></div>

                <div className={styles.box}>
                    <img src={SVG3} alt="duolingo notebook" id={styles.img1} />
                    <div className={styles.descritivo}>
                        <h2>Duolingo for Schools</h2>
                        <p>
                            Ferramentas grátis para professores que desejam ajudar os alunos a aprender idiomas no Duolingo, dentro e fora da sala de aula.
                        </p>
                        <p id={styles.p}>LEVE O DUOLINGO PARA A SUA TURMA</p>
                    </div>
                </div>
                <div className={styles.divisao}></div>

                <div className={styles.box}>
                    <img src={SVG5} alt="duolingo medalha" id={styles.img2_active} />
                    <div className={styles.descritivo}>
                        <h2>Duolingo English Test</h2>
                        <p>
                            Conheça o teste de inglês conveniente, rápido e acessível que é aceito no mundo todo. Com a integração da inteligência artificial aos conhecimentos de ponta sobre avaliação, oferecemos autonomia para que você faça o teste onde e quando se sentir mais à vontade.
                        </p>
                        <p id={styles.p}>CERTIFIQUE O SEU INGLÊS</p>
                    </div>
                    <img src={SVG5} alt="duolingo medalha" id={styles.img2} />
                </div>
                <div className={styles.divisao}></div>

                <div className={styles.box}>
                    <img src={SVG4} alt="duolingo professor" id={styles.img1} />
                    <div className={styles.descritivo}>
                        <h2>Cursos eficazes e eficientes</h2>
                        <p>
                            As últimas pesquisas mostram que os nossos cursos ensinam leitura, escuta e fala de forma eficaz e eficiente. Confira!
                        </p>
                        <p id={styles.p}>SAIBA MAIS SOBRE AS NOSSAS PESQUISAS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2