import './section-sobre.modules.css'
import iconMission from "../../image/mission.png";
import iconVision from "../../image/shared-vision.png";
import iconValues from "../../image/valor.png";
import phototest from "../../image/MadreTeresat.jpg";


export default function SectionSobre(){
    return(
        <div className='sectionSobre' id='Sobre'>
            <div className='title'>
                <h2 className='H2padding'>QUEM SOMOS</h2>
            </div>
            <div>

            </div>
           
            
            <div className='ul-about-div'>
                <div className="imagem-titulo">
                    <div>
                        <img src={iconMission} alt="Missão" className="imagem-missao" />
                    </div>
                    
                    <h3>Missão</h3>
                    <p>Oferecer um lar amoroso e um apoio abrangente para crianças órfãs que perderam seus pais para a terrível pandemia da COVID-19. Estamos comprometidos em fornecer cuidados holísticos, incluindo assistência emocional, educacional e médica, para ajudar essas crianças a superarem suas perdas e construírem um futuro esperançoso."</p>
                </div>

                <div className="imagem-titulo">
                    <div>
                        <img src={iconVision} alt="Visão" className="imagem-visao" />
                    </div>
                    
                    <h3>Visão</h3>
                    <p>criar uma comunidade onde cada criança órfã afetada pela COVID-19 se sinta amada, valorizada e capacitada para alcançar seu pleno potencial. Vemos um mundo onde essas crianças encontram esperança, segurança e oportunidades para crescerem em indivíduos resilientes e contribuintes para a sociedade.</p>
                </div>

                <div className="imagem-titulo">
                    <div>
                        <img src={iconValues} alt="Valores" className="imagem-valores" />
                    </div>
                    
                    <h3>Valores</h3>
                    <p>Valorizamos o amor incondicional, a compaixão e a empatia em nossas interações com as crianças que atendemos. Priorizamos a integridade, a transparência e a responsabilidade em nossas práticas de gestão e prestação de contas. E estamos comprometidos com a equidade, a diversidade e a inclusão, garantindo que todas as crianças recebam o apoio de que precisam, independentemente de sua origem ou circunstância.</p>
                </div>
            </div>
            <div className='aboutUs2'>
                <div>
                    <p>O projeto social de ação humanitária As Pupilas de Madre Teresa está nascendo com o propósito de oferecer para as crianças órfãs de qualquer idade, raça, cor, religião ou etnia, atingidas pela COVID-19, violência e outros, os seguintes atendimentos:</p>
                
                    <ul className='ul-about-Us'>
                        <li>Acolhimento e amparo na elaboração do luto.</li>
                        <li>Suporte terapêutico em contexto de vulnerabilidade socioemocional.</li>
                        <li>Apoio psicopedagógico frente as dificuldades escolares.</li>
                        <li>Ações de saúde mental aos familiares.</li>

                    </ul>
                </div>
                <div className='divimgQuemSomos'>
                    <img src={phototest} alt="imagemQuemSomos" />
                </div>
            </div>
     
        </div>
    )
}