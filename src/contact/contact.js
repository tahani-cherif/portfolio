import Coordoner from "./coordoner";
import Formulaire from "./formulaire";
import './contact.css'


export default function Contact(){
    return(
        <div className="pro" id='contact'>
             <p className='titre'>Contact</p>
             <div className="continue">
             <Coordoner/>
             <Formulaire/>
             </div>
        </div>
    )
}