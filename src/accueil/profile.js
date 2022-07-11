import ".//profile.css"
import {BsGithub,BsLinkedin} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {MdPictureAsPdf} from 'react-icons/md'
export default function Profile(){
    return(<div className="profil">
        <img src="./Sans titre.png"/>
        <div className="text">
        <p>TAHANI CHERIF</p>
        <p>Développeuse Web et Mobile</p>
        </div>
        <div className="reseau">
       <a href="https://github.com/tahani-cherif"><BsGithub color="#2B7CD3" fontSize='2rem'  className="icon"/> </a> 
       <a href="https://www.linkedin.com/in/cherif-tahani-50815a214/"> <BsLinkedin color="#2B7CD3" fontSize='2rem'  className="icon"/> </a>
       <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=new"><SiGmail color="#2B7CD3" fontSize='2rem'  className="icon"/></a> 
       <a href="#"> <MdPictureAsPdf color="#2B7CD3" fontSize='2rem'  className="icon"/></a>
        </div>
    </div>)
}