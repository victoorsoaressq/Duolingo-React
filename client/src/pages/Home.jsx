/* COMPONENTS */
import Header from "../components/HeaderHome/Header"
import Section1 from "../components/MainHome/Section1"
import Section2 from "../components/MainHome/Section2"
import Footer from "../components/FooterHome/Footer"

function Home() {
    return(
        <div className="Home">
            <Header />
            <main>
                <Section1 />
                <Section2 />
            </main>
            <Footer />
        </div>
    )
}

export default Home