import './navbar.modules.css'
import logo from '../../image/logo-ccria.png';
import logoMobile from  '../../image/menu_white_36dp.svg';

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
    return(
    <div className='header'>
       <div className="nav-bar">

            <div className='logo-Nav-Bar'>
                <img  src={logo} alt="logo-site" />
            </div>

            <div className='nav-list'>

                <ul>
                    <li className='nav-item'> <a href="#Inicio" className='nav-link'>Início</a></li>
                    <li className='nav-item'><a href="#Sobre" className='nav-link'>Sobre</a></li>
                    <li className='nav-item'><a href="#Portifolio" className='nav-link'>Portifólio</a></li>
                    <li className='nav-item'><a href="#Servicos" className='nav-link'>Serviços</a></li>
                    <li className='nav-item'><a href="#NossoTime" className='nav-link'>Nosso Time</a></li>
                    <li className='nav-item'><a href="#Contato" className='nav-link'>Contato</a></li>
                </ul>
                
            </div>

            <div className='mobile-menu-icon'>
                <button> <img className='icon' onClick={menuShow} src={logoMobile} alt="" /></button>
            </div>
       </div>
       <div className='menu-item'>
                <ul>
                    <li className='nav-item' onClick={menuShow}> <a href="#Inicio" className='nav-link'>Início</a></li>

                    <li className='nav-item' onClick={menuShow}><a href="#Sobre" className='nav-link'>Sobre</a></li>

                    <li className='nav-item' onClick={menuShow}><a href="#Portifolio" className='nav-link'>Portifólio</a></li>

                    <li className='nav-item' onClick={menuShow}><a href="#Servicos" className='nav-link'>Serviços</a></li>

                    <li className='nav-item' onClick={menuShow}><a href="#NossoTime" className='nav-link'>Nosso Time</a></li>

                    <li className='nav-item' onClick={menuShow}><a href="#Contato" className='nav-link'>Contato</a></li>
                </ul>
            </div>
    </div>
    )
}