import  './footer-faleConosco.modules.css'

export default function FooterFaleConosco(){
    return(
        <div className="faleConosco" id='Contato'>
            <div className='title' >
             <h2>Fale Conosco</h2>

             <div class='form'>
                <input type="text" placeholder='Nome' />
                <input type="email" placeholder='E-mail' />
                <input type="text" placeholder='Assunto' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Mensagem'></textarea>
                <button>Enviar mensagem</button>      

             </div>

            </div>

             <div className='contact'>
                <div className='cardContact'>
                    <p className='titleContact'>WhatsApp: </p>
                    <a href="https://web.whatsapp.com/send?phone=61 3297-3426" target="_blank">61 3297-3426</a>
                </div>

                <div className='cardContact'> 
                    <p className='titleContact'>E-mail: </p>
                    <a href="mailto:contato@ccria.com.br">contato@ccria.com.br</a>
                </div>
                
                <div className='cardContact'>
                    <p className='titleContact'>Endereço:</p>
                    <p>
                    SGAS 915 Bloco A Sala 205, Ed. Office Center - Brasília - DF
                    </p>
                </div>
             </div>

        </div>
    )
}