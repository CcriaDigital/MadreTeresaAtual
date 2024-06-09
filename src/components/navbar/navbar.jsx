import './navbar.modules.css'
import logo from '../../image/logomadre.png';
import logoMobile from  '../../image/menu_white_36dp.svg';
import { Link, NavLink } from 'react-router-dom';

window.addEventListener('scroll',function(){
    let navbar = document.querySelector('.nav-bar');
    navbar.classList.toggle('rolagem', window.scrollY > 0)
})

function menuShow(){
    let menuMobile = document.querySelector('.menu-item');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open')
    }
}

export default function NavBar(){
    const smoothScroll = (event, targetId) => {
        event.preventDefault();
        const target = document.getElementById(targetId);
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
        menuShow(); 
    };

    return(
        
    <div className='header'>
       <div className="nav-bar">
            

            <div className='logo-Nav-Bar'>
             <Link to="/"><img src={logo} alt="" /></Link>
            </div>

            <div className='nav-list'>

                <ul>
                    <li className='nav-item'><a href="#Inicio"
                    onClick={(event) => smoothScroll(event, 'Inicio')}
                    className='nav-link'>HOME</a></li>
                    <li className='nav-item'><a href="#Sobre"
                    onClick={(event) => smoothScroll(event, 'Sobre')}
                    className='nav-link'>QUEM SOMOS</a></li>
                    <li className='nav-item'><a href="#Servicos"
                    onClick={(event) => smoothScroll(event, 'Servicos')}  className='nav-link'>PROJETOS</a></li>
                    <li className='nav-item'><a href="#Contato"
                    onClick={(event) => smoothScroll(event, 'Contato')} className='nav-link'>CONTATOS</a></li>
                    <li>
                        <Link className='linkDireto' to="/campanha1">
                               I WORKSHOP
                        </Link>
                    </li>
                
                </ul>
                
            </div>

            <div className='mobile-menu-icon'>
                <button> <img className='icon' onClick={menuShow} src={logoMobile} alt="icon-site" /></button>
            </div>
       </div>
       <div className='menu-item'>
                <ul>
                    <li className='nav-item' > 
                    <a href="#Inicio"
                    onClick={(event) => smoothScroll(event, 'Inicio')}
                    className='nav-link'>Início</a></li>
                    

                    <li className='nav-item' ><a href="#Sobre"
                    onClick={(event) => smoothScroll(event, 'Sobre')}
                    className='nav-link'>QUEM SOMOS</a></li>

                    <li className='nav-item' ><a href="#Servicos"
                    onClick={(event) => smoothScroll(event, 'Servicos')} className='nav-link'>PROJETOS</a></li>

                    <li className='nav-item' onClick={menuShow}><a href="#Contato" className='nav-link'>Contato</a></li>

                </ul>
            </div>
    </div>
    )
}