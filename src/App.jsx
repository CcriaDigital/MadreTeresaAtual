import './App.css'
import Formulario from './components/Section-Formulario/Formulario'
import FooterFaleConosco from './components/footer-faleConosco/footer-faleConosco'
import NavBar from './components/navbar/navbar'
import SectionInicial from './components/section-inicial/section-inicial'
import SectionServicos from './components/section-serviços/section-servicos'
import SectionSobre from './components/section-sobre/section-sobre'

function App() {
  
  return (
    <>
    <head>
      <link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon.ico" />
    </head>
      <NavBar/>
      <SectionInicial/>
      <SectionSobre/>
      <SectionServicos/>
      <Formulario/>
      <FooterFaleConosco/>
    </>
  )
}

export default App
