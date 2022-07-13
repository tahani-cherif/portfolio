import ".//etude.css"

export default function Etude(){
    return(
        <div className='etude' id="etude">
           <p className="textetude">Etudes</p>
           <ul>
            <li>
            Ecole supérieure des sciences économiques et commerciales de Tunis
            </li>
            <div className="parg">
            <p>Année 2021/2022</p>
            <p>Licence Nationale en Business Computing spécialité E-Business</p>
            </div>
            <li id="lycee">
             Lycée secondaire cité des journalistes 
            </li>
            <div className="parg">
            <p>Année 2018/2019</p>
            <p>Baccalauréat en économie et gestion</p>
            </div>
           </ul>
        </div>
    )
}