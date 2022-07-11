import './/projet.css'
export default function Projet(props){
    return(
            <div className='nomprojet'>
                <img src={props.src} id='img' style={{width:props.taill}}/>
                <p className='textprojet'>{props.nom}</p>
            </div>
    )
}