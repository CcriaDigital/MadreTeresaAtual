import './section-nossoTime.modules.css'

export default function SectionNossoTime(){
    return(
        <div className='sectionNossoTime' id='NossoTime'>
            <div className='title'>
                <h2>Nosso time</h2>
            </div>
            <div>
                <ul className='listCardTime' >
                <li className='cardTime'>
                    <img src="https://ccria.com.br/images/team/team-1.png" alt="" />
                    <h3>Bruno Albuquerque</h3>
                    <p>CEO</p>
                </li>
                <li className='cardTime'>
                    <img src="https://ccria.com.br/images/team/team-1.png" alt="" />
                    <h3>Bruno Barros</h3>
                    <p>Gerente de Projetos</p>
                </li>
                <li className='cardTime'>
                    <img src="https://ccria.com.br/images/team/team-1.png" alt="" />
                    <h3>Gabrielly Albuquerque</h3>
                    <p>Gerente de Markenting</p>
                </li>
                <li className='cardTime'>
                    <img src="https://ccria.com.br/images/team/team-1.png" alt="" />
                    <h3>Diogo Ribeiro</h3>
                    <p>Gerente de desenvolvimento</p>
                </li>
                </ul>
            </div>
        </div>
    )
}