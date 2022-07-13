import './/projet.css'
import Projet from './copprojet'
export default function Mainprojet(){
    return(
     
        <div className="pro" id="projet">
            <p className='titre'>Portfolio</p>
            <div className='ligne1' >
           <Projet src='./youtube.png' nom='Clonage Youtube avec Rect js' taill="458px"/>
           <Projet src='./mobile.png' nom='Application mobile pour les nom voyant et malvoyant' taill="113px"/>
            </div>
            <div className='boxprojet'>
            <Projet src='./hrc.jpg' nom='Création d’une site web dans le cadre d’informer , communiquer et sensibiliser' taill="345px"/>
            <Projet src='./site.jpg' nom="Création d'une site web pour un club robotique d'enfant" taill="345px"/>
            </div>
            <div className='boxprojet'>
            <Projet src="./python.png" nom="Développement d'un plan de décision avec pygrametl (ETL python ) et power BI" taill="489px"/>
            <Projet src="./petshop.png" nom="Développement d'un site web marchand (Animalerie) avec Wix" taill="446px"/>
            </div>
        </div>
    )
}