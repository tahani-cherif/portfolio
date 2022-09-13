import './/projet.css'
import Projet from './copprojet'

export default function Mainprojet(){
    return(
     
        <div className="pro" id="projet">
            <p className='titre'>Portfolio</p>
          <div className='ligne1' >
           <Projet src='./youtube.png' nom='Clonage Youtube avec React js' git='https://github.com/tahani-cherif/Clone-Youtube-Reactjs' 
           pdf='./Clonage Youtube avec React.pdf' taill="458px" colorgit='#2B7CD3' colorpdf='#2B7CD3' coloryout='#808080' />
           <Projet src='./mobile.png' nom='Application mobile pour les nom voyant et malvoyant' taill="113px" 
           git='https://github.com/tahani-cherif/App-PFE' pdf='./Présentation-PFE.pdf' href="https://drive.google.com/file/d/165W64XhC0OBJYxIShiLm7h6D_b2qi7SV/view?usp=sharing"
           colorgit='#2B7CD3' colorpdf='#2B7CD3' coloryout='#2B7CD3'/>
            </div>
            <div className='boxprojet'>
            <Projet src="./port.jpeg" nom="Développement d'un portfolio" taill="446px" 
            git="https://github.com/tahani-cherif/portfolio" colorgit='#2B7CD3' colorpdf='#808080' coloryout='#808080'/>
            <Projet src="./projetnestjs.png" nom="CRUD avec Nest js et ORM TypeORM"
             taill="471px" colorgit='#2B7CD3' colorpdf='#808080' coloryout='#808080' git="https://github.com/tahani-cherif/mini-projet-nest-js"/>
            </div>
            <div className='boxprojet'>
            <Projet src="./projetexpress.png" nom="CEUD avec express js et ORM sequelize" taill="446px" 
            git="https://github.com/tahani-cherif/mini-projet-express" coloryout='#808080' colorpdf='#808080' colorgit='#2B7CD3'/>
            <Projet src="./nextjs.png" nom="Création première  Application avec Nextjs E-commerce  (utilisée context API ,localstorage)" taill="470px" 
            git="https://github.com/tahani-cherif/App-nextjs-context-API" colorgit='#2B7CD3' colorpdf='#808080' coloryout='#808080'/>
            </div>
            <div className='boxprojet'>
             <Projet src="./formulaire.png" nom="Validation formulaire en React à l’aide de React Hook Form et Yup" taill="470px" 
            git="https://github.com/tahani-cherif/Validation-formulaire-en-React-l-aide-de-React-Hook-Form-et-Yup" colorgit='#2B7CD3' colorpdf='#808080' coloryout='#808080'/>
             <Projet src="./python.png" nom="Développement d'un plan de décision avec pygrametl (ETL python ) et power BI"
             taill="489px" colorgit='#2B7CD3' colorpdf='#808080' coloryout='#808080' git="https://github.com/tahani-cherif/D-veloppement-d-un-plan-de-d-cision-avec-pygrametl-ETL-python-et-power-BI"/>
            </div>
            <div className='boxprojet'>
            <Projet src='./site.jpg' nom="Création d'une site web pour un club robotique d'enfant" taill="345px"
             pdf='php.pdf' href="https://youtu.be/09KtDCeutbM" git="https://github.com/tahani-cherif/Robotics-Club-WebSite-PHP"
             colorgit='#2B7CD3' colorpdf='#2B7CD3' coloryout='#2B7CD3'/>
           <Projet src='./hrc.jpg' nom='Création d’une site web dans le cadre d’informer , communiquer et sensibiliser' 
            taill="345px" href="https://youtu.be/yR25V80yMgM"  pdf='./harcèlement sexuelle.pdf' git="https://github.com/tahani-cherif/Hope-WebSite"
            colorgit='#2B7CD3' colorpdf='#2B7CD3' coloryout='#2B7CD3'/>
          
            </div>
            <div className='boxprojet'>
            <Projet src="./petshop.png" nom="Développement d'un site web marchand (Animalerie) avec Wix" taill="446px" 
            href="https://youtu.be/iJ2heZGCqvQ" colorgit='#808080' colorpdf='#808080' coloryout='#2B7CD3'/>
            </div>
        </div>
    )
}