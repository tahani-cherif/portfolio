import './/projet.css'
import Projet from './copprojet'

export default function Mainprojet(){
    return(
     
        <div className="pro" id="projet">
            <p className='titre'>Portfolio</p>
            <div className='ligne1' >
           <Projet src='./youtube.png' nom='Clonage Youtube avec Rect js' git='https://github.com/tahani-cherif/projet-web' 
           pdf='./Clonage Youtube avec React.pdf' taill="458px" colorgit='#2B7CD3' colorpdf='#2B7CD3' coloryout='#808080' />
           <Projet src='./mobile.png' nom='Application mobile pour les nom voyant et malvoyant' taill="113px" 
           git='https://github.com/tahani-cherif/App-PFE' pdf='./Présentation-PFE.pdf'
           colorgit='#2B7CD3' colorpdf='#2B7CD3' coloryout='#808080'/>
            </div>
            <div className='boxprojet'>
            <Projet src='./hrc.jpg' nom='Création d’une site web dans le cadre d’informer , communiquer et sensibiliser' 
            taill="345px" href="https://youtu.be/yR25V80yMgM"  pdf='./harcèlement sexuelle.pdf'
            colorgit='#808080' colorpdf='#2B7CD3' coloryout='#2B7CD3'/>
            <Projet src='./site.jpg' nom="Création d'une site web pour un club robotique d'enfant" taill="345px"
             pdf='php.pdf' href="https://youtu.be/09KtDCeutbM" colorgit='#808080' colorpdf='#2B7CD3' coloryout='#2B7CD3'/>
            </div>
            <div className='boxprojet'>
            <Projet src="./python.png" nom="Développement d'un plan de décision avec pygrametl (ETL python ) et power BI"
             taill="489px" colorgit='#808080' colorpdf='#808080' coloryout='#808080'/>
            <Projet src="./petshop.png" nom="Développement d'un site web marchand (Animalerie) avec Wix" taill="446px" 
            href="https://youtu.be/iJ2heZGCqvQ" colorgit='#808080' colorpdf='#808080' coloryout='#2B7CD3'/>
            </div>
        </div>
    )
}