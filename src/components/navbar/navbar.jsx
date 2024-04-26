import './navbar.modules.css'
import logo from '../../image/logo-ccria-2.png';

export default function NavBar(){
    return(
       <div className="navbar">
        <div>
            <img className='logoNavBar' src={logo} alt="logo-site" /></div>
        <div className='navbar-children'>
            <a href="#Inicio">Início</a>
            <a href="#Sobre">Sobre</a>
            <a href="#Portifolio">Portifólio</a>
            <a href="#Servicos">Serviços</a>
            <a href="#NossoTime">Nosso Time</a>
            <a href="#Contato">Contato</a>
        </div>
       </div>
    )
}