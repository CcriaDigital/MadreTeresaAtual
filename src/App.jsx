import { RouterProvider } from 'react-router-dom'
import './App.css'
import Formulario from './pages/Formulario'
import FooterFaleConosco from './components/footer-faleConosco/footer-faleConosco'
import NavBar from './components/navbar/navbar'
import SectionInicial from './components/section-inicial/section-inicial'
import SectionServicos from './components/section-serviços/section-servicos'
import SectionSobre from './components/section-sobre/section-sobre'
import router from './router'

function App() {
  
  return <RouterProvider router={router}/>
}

export default App
