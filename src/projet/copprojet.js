import './/projet.css'
import {MdPictureAsPdf} from 'react-icons/md'
import {BsYoutube,BsGithub} from 'react-icons/bs'
export default function Projet(props){
    return(
            <div className='nomprojet'>
                <img src={props.src} id='img' style={{width:props.taill}} className="img"/>
                <p className='textprojet'>{props.nom}</p>
                <div className='href'>              
                <a href={props.git} target="_blank"><BsGithub color={props.colorgit}fontSize='2rem'  className="icon"/> </a> 
                <a href={props.pdf} target="_blank"> <MdPictureAsPdf color={props.colorpdf} fontSize='2rem'  className="icon"/></a>
                <a href={props.href} target="_blank"> <BsYoutube color={props.coloryout} fontSize='2rem'  className="icon"/></a>
                </div>
            </div>
    )
}