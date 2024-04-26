import './navbar.modules.css'
export default function NavBar(){
    return(
       <div className="navbar">
        <img src="" alt="" />
        <div><img src="../image/logo-ccria-2.png" alt="logo-site" /></div>
        <div className='navbar-children'>
            <a href="#Inicio">Início</a>
            <a href="#Sobre">Sobre</a>
            <a href="#Portifolio">Portifólio</a>
            <a href="#Servicos">Serviços</a>
            <a href="#NossoTime">Nosso Time</a>
            <a href="#">Contato</a>
        </div>
       </div>
    )
}