
import './App.css'
import FooterFaleConosco from './components/footer-faleConosco/footer-faleConosco'
import NavBar from './components/navbar/navbar'
import SectionInicial from './components/section-inicial/section-inicial'
import SectionNossoTime from './components/section-nossoTime/section-nossoTime'
import SectionPortifolio from './components/section-portifolio/section-portifolio'
import SectionServicos from './components/section-serviços/section-servicos'
import SectionSobre from './components/section-sobre/section-sobre'

function App() {
  
  return (
    <>
      <NavBar/>
      <SectionInicial/>
      <SectionSobre/>
      <SectionPortifolio/>
      <SectionServicos/>
      <SectionNossoTime/>
      <FooterFaleConosco/>

    </>
  )
}

export default App
