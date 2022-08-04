import './sass/main.css'

function App() {
  return (
    <div className="container">

      <header>
        <div className='nav'>
          <div className='logo'>
            <a href='#'><img src='https://d35aaqx5ub95lt.cloudfront.net/images/dca3b978d07a7dfc05adb1d5526e9e21.svg'></img></a>
          </div>
          <div className='nav-links'>
            <p>IDIOMA DO SITE: PORTUGUÊS</p>
          </div>
        </div>
        
      </header>

      <main>
        <section className='home-container'>

          <div className='home'>

            <div className='home-img'>
              <img src="https://d35aaqx5ub95lt.cloudfront.net/images/331a32943ff73be28537dfc7469d5639.svg" alt="Planeta-img"></img>
            </div>
            <div className='home-botoes'>
              <h1>O jeito grátis, divertido e eficaz de aprender um idioma!</h1>
              <div><button id="colorGreen">Comece agora</button></div>
              <div><button id="colorBlue">Já tenho uma conta</button></div>
            </div>

          </div>
          
          <div className='home-footer'></div>
        </section>

        <section className='informacoes'>

          <div className='info-container'>

            <img src='https://d35aaqx5ub95lt.cloudfront.net/images/776364e6419216ffd84ddf8d8815711b.svg'></img>

            <div className='info-descritivo'>
              <h2>
                A melhor maneira do mundo de aprender idiomas
              </h2>
              <p>
                Aprender com o Duolingo é divertido, e <span>pesquisas comprovam que funciona mesmo!</span> Com lições rápidas e curtinhas, você ganha pontos e desbloqueia novos níveis enquanto aprende a se comunicar na vida real.
              </p>

            </div>

          </div>

          <div className='linha'></div>

          <div className='info-container column'>

            <div className='info-titulo'>
              <h2>Coisas que vão fazer você amor o Duolingo</h2>
            </div>
            
            <div className='info-box'>

              <div>
                <div className='info-container-box'>

                  <img src='https://d35aaqx5ub95lt.cloudfront.net/images/feature-streak.svg'></img>

                  <h3>Eficaz e eficiente</h3>

                  <p>
                    Os nossos cursos ensinam habilidades de leitura, escuta e fala de forma eficaz e eficiente. Confira as últimas pesquisas sobre o assunto!
                  </p>
                </div>

                <div className='info-container-box'>

                  <img src='https://d35aaqx5ub95lt.cloudfront.net/images/feature-check.svg'></img>

                  <h3>Conteúdo personalizado</h3>

                  <p>
                  Com a combinação do melhor da inteligência artificial e da ciência da linguagem, as lições são feitas sob medida para ajudar você a aprender no nível e ritmo certos.
                  </p>
                </div>
              </div>

              <img src='https://d35aaqx5ub95lt.cloudfront.net/images/laptop-features.svg'></img>

              <div>
                <div className='info-container-box'>

                  <img src='https://d35aaqx5ub95lt.cloudfront.net/images/splash/ebdcc22deaf0f85388fcb09e7ecfbe78.svg'></img>

                  <h3>Motivação constante</h3>

                  <p>
                  Fica fácil criar o hábito de aprender idiomas com recursos que mais parecem um jogo! E, pra ajudar ainda mais, temos desafios divertidos e lembretes do nosso mascote simpático, a coruja Duo
                  </p>
                </div>

                <div className='info-container-box'>

                  <img src='https://d35aaqx5ub95lt.cloudfront.net/images/splash/a4d5fab3d1926c240cb2ae696b07d156.svg'></img>

                  <h3>Muita diversão!</h3>

                  <p>
                  Aprender de verdade não precisa ser chato! Melhore as suas habilidades todos os dias com exercícios envolventes e personagens interessantes.
                  </p>
                </div>
              </div>

            </div>


          </div>

          <div className='linha'></div>

          <div className='info-container'>

            <img src='https://d35aaqx5ub95lt.cloudfront.net/images/776364e6419216ffd84ddf8d8815711b.svg'></img>

            <div className='info-descritivo'>
              <h2>
                A melhor maneira do mundo de aprender idiomas
              </h2>
              <p>
                Aprender com o Duolingo é divertido, e <span>pesquisas comprovam que funciona mesmo!</span> Com lições rápidas e curtinhas, você ganha pontos e desbloqueia novos níveis enquanto aprende a se comunicar na vida real.
              </p>

            </div>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
