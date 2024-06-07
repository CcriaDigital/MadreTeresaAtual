import  './footer-faleConosco.modules.css'

export default function FooterFaleConosco(){
    return(
        <div className="faleConosco" id='Contato'>
            <div className='title' >
             <h2>Contatos</h2>

            </div>

             <div className='contact'>
                <div className='cardContact'>
                    <p className='titleContact'>WhatsApp: </p>
                    <a href="https://web.whatsapp.com/send?phone=61 3297-3426" target="_blank">61 3297-3426</a>
                </div>

                <div className='cardContact'> 
                    <p className='titleContact'>E-mail: </p>
                    <a href="mailto:clinauralima@gmail.com">CLINAURALIMA@GMAIL.COM</a>
                </div>
                
                <div className='cardContact'>
                    <p className='titleContact'>Endereço:</p>
                    <p>
                   SGAS 915, Bloco C sala 202 Ed. Office Center, Brasília, Brazil 70390-150
                    </p>
                </div>
             </div>

        </div>
    )
}