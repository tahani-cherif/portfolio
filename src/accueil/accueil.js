import Motivation from "./motivation";
import Profile from "./profile";
import './motivation.css'

export default function Accueil(){
    return(<div className="acc" id="accueil">
       <Profile/>
        <Motivation/>
    </div>)
}