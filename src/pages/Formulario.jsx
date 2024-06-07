import { Link, NavLink } from 'react-router-dom';
import '../components/Section-Formulario/Formulario.css'
import FooterFaleConosco from '../components/footer-faleConosco/footer-faleConosco';
import NavBar from '../components/navbar/navbar';
import logo from '../image/logomadre.png';
const Formulario = () => {

  return (
    <>
   <nav>
    <div>
        <Link to="/"> <img src={logo} alt="" /></Link>
        
    </div>
    <div>
        <Link className='linkDireto' to="/"> Voltar</Link>
    </div>
   </nav>
    <div className='formulario' id='Formulario'> 
        
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdkJ3gzvuECGtdoaHKiWRmKJrL35ix6-iiVURxfpTGbvccitQ/viewform?embedded=true" width="700" height="1200
        " frameborder="0" marginheight="0" marginwidth="0" className='formularioIframe'></iframe>
        
      </div>
    <FooterFaleConosco/>
    </>
   
    
  );
};

export default Formulario;
