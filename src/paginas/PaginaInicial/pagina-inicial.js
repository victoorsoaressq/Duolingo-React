import React from 'react';
import './main.css'
import {Link} from 'react-router-dom';

function Duolingo(){
    return(
    <div className="duolingo">

      <header>
        <div className='nav'>
          <div className='logo'>
            <a href='#'><img src='https://d35aaqx5ub95lt.cloudfront.net/images/dca3b978d07a7dfc05adb1d5526e9e21.svg' /></a>
          </div>
          
          <div className='nav-links'>
            <p>IDIOMA DO SITE: PORTUGUÊS</p>
          </div>
        </div>

      </header>

      <main>

        {/*Sessão principal*/}
        <section className='home-container'>

          <div className='home'>

            <div className='home-img'>
              <img src="https://d35aaqx5ub95lt.cloudfront.net/images/331a32943ff73be28537dfc7469d5639.svg" alt="Planeta-img" />
            </div>
            <div className='home-botoes'>
              <h1>O jeito grátis, divertido e eficaz de aprender um idioma!</h1>
              <Link to='/entrar'><button id="colorGreen">Comece agora</button></Link>
              <div><button id="colorBlue">Já tenho uma conta</button></div>
            </div>

          </div>

          <div className='home-footer'></div>
        </section>

        {/*Sessão de informações do site*/}
        <section className='informacoes'>

          <div className='info-container'>

            <img src='https://d35aaqx5ub95lt.cloudfront.net/images/776364e6419216ffd84ddf8d8815711b.svg' />

            <div className='info-descritivo'>
              <h2>
                A melhor maneira do mundo de aprender idiomas
              </h2>
              <p>
                Aprender com o Duolingo é divertido, e <span>pesquisas comprovam que funciona mesmo!</span> Com lições rápidas e curtinhas, você ganha pontos e desbloqueia novos níveis enquanto aprende a se comunicar na vida real.
              </p>

            </div>

          </div>

          {/* Linha de separaçõa de conteúdo*/}
          <div className='linha'></div>

          <div className='info-container column'>

            <div className='info-titulo'>
              <h2>Coisas que vão fazer você amor o Duolingo</h2>
            </div>

            <div className='info-box'>

              <div>
                <div className='info-container-box'>

                  <img src='https://d35aaqx5ub95lt.cloudfront.net/images/feature-streak.svg' />

                  <h3>Eficaz e eficiente</h3>

                  <p>
                    Os nossos cursos ensinam habilidades de leitura, escuta e fala de forma eficaz e eficiente. Confira as últimas pesquisas sobre o assunto!
                  </p>
                </div>

                <div className='info-container-box'>

                  <img src='https://d35aaqx5ub95lt.cloudfront.net/images/feature-check.svg' />

                  <h3>Conteúdo personalizado</h3>

                  <p>
                    Com a combinação do melhor da inteligência artificial e da ciência da linguagem, as lições são feitas sob medida para ajudar você a aprender no nível e ritmo certos.
                  </p>
                </div>
              </div>

              <img src='https://d35aaqx5ub95lt.cloudfront.net/images/laptop-features.svg' />

              <div>
                <div className='info-container-box'>

                  <img src='https://d35aaqx5ub95lt.cloudfront.net/images/splash/ebdcc22deaf0f85388fcb09e7ecfbe78.svg' />

                  <h3>Motivação constante</h3>

                  <p>
                    Fica fácil criar o hábito de aprender idiomas com recursos que mais parecem um jogo! E, pra ajudar ainda mais, temos desafios divertidos e lembretes do nosso mascote simpático, a coruja Duo
                  </p>
                </div>

                <div className='info-container-box'>

                  <img src='https://d35aaqx5ub95lt.cloudfront.net/images/splash/a4d5fab3d1926c240cb2ae696b07d156.svg' />

                  <h3>Muita diversão!</h3>

                  <p>
                    Aprender de verdade não precisa ser chato! Melhore as suas habilidades todos os dias com exercícios envolventes e personagens interessantes.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Linha de separaçõa de conteúdo*/}
          <div className='linha'></div>

          <div className='info-container'>

            <img className='img' src='https://d35aaqx5ub95lt.cloudfront.net/images/duo-plus-fly-circle-2.svg' />

            <div className='info-descritivo'>
              <h2>
                Melhore o seu aprendizado com o Duolingo Plus
              </h2>
              <p>
                Aprender um idioma no Duolingo é totalmente grátis, mas com o Plus você pode remover os anúncios e avançar mais rápido. Experimente 14 dias de graça!
              </p>

              <a href="#">SAIBA MAIS SOBRE O DUOLINGO PLUS</a>

            </div>

          </div>

          {/* Linha de separaçõa de conteúdo*/}
          <div className='linha'></div>

          <div className='info-container'>

            <div className='info-descritivo'>
              <h2>
                Aprenda onde e quando quiser
              </h2>
              <p>
                Use o seu tempo livre de forma mais produtiva com os aplicativos para iPhone e Android. Faça o download e entenda por que conquistamos os maiores prêmios da Apple e do Google.
              </p>

              <div className='bnt-bnt'>
                <button></button>
                <button></button>
              </div>

            </div>

            <img className='img' src='https://d35aaqx5ub95lt.cloudfront.net/images/duo-traveler.svg' />

          </div>

          {/* Linha de separaçõa de conteúdo*/}
          <div className='linha'></div>
          
          <div className='info-container'>

            <img className='img' src='https://d35aaqx5ub95lt.cloudfront.net/images/laptop-schools.svg' />

            <div className='info-descritivo'>
              <h2>
                Duolingo para Escolas
              </h2>
              <p>
                Ferramentas grátis para professores que desejam ajudar os alunos a aprender idiomas no Duolingo, dentro e fora da sala de aula.
              </p>

              <a href="#">LEVE O DUOLINGO PARA A SUA SALA DE AULA</a>

            </div>

          </div>

          {/* Linha de separaçõa de conteúdo*/}
          <div className='linha'></div>

          <div className='info-container'>

            <div className='info-descritivo'>
              <h2>
                Duolingo English Test
              </h2>
              <p>
                Conheça o teste de inglês conveniente, rápido e acessível que é aceito no mundo todo. Com a integração da inteligência artificial aos conhecimentos de ponta sobre avaliação, oferecemos autonomia para que as pessoas façam o teste no melhor local e momento para elas.
              </p>

              <a href="#">CERTIFIQUE O SEU INGLÊS</a>

            </div>

            <img className='img' src='https://d35aaqx5ub95lt.cloudfront.net/images/9cb1bd734855384c2de08fe80443af9f.svg' />

          </div>

          {/* Linha de separaçõa de conteúdo*/}
          <div className='linha'></div>

          <div className='info-container'>

            <img className='img' src='https://d35aaqx5ub95lt.cloudfront.net/images/efficacyPage/5b117228254f9a9d8c7f541734f18225.svg' />

            <div className='info-descritivo'>
              <h2>
                Cursos eficazes e eficientes
              </h2>
              <p>
                Os nossos cursos ensinam habilidades de leitura, escuta e fala de forma eficaz e eficiente. Confira as últimas pesquisas sobre o assunto!
              </p>

              <a href="#">SAIBA MAIS SOBRE AS NOSSAS PESQUISAS</a>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Duolingo;