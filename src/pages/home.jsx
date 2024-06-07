import FooterFaleConosco from "../components/footer-faleConosco/footer-faleConosco"
import NavBar from "../components/navbar/navbar"
import SectionInicial from "../components/section-inicial/section-inicial"
import SectionServicos from "../components/section-serviços/section-servicos"
import SectionSobre from "../components/section-sobre/section-sobre"

function Home() {
  
    return (
        <>
        <NavBar/>
        <SectionInicial/>
        <SectionSobre/>
        <SectionServicos/>
        <FooterFaleConosco/>
        </>
    )
  }
  
  export default Home
  