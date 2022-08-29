import {FaMapMarkerAlt} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub,BsTelephoneFill} from 'react-icons/bs'
import './contact.css'
export default function Coordoner(){
    return(
        <div>
            <div className='bloc'>
                 <FaMapMarkerAlt color='#2B7CD3' font-size='33px'/>
                 <p className='textcorrdoner'>Cité cheker rawed ariana</p>
             </div>
             <div className='bloc'>
                 <SiGmail color='#2B7CD3'  font-size='33px'/>
                 <p className='textcorrdoner'>cheriftahani92@gmail.com</p>
             </div>
             <div className='bloc'>
                 <AiFillLinkedin color='#2B7CD3'  font-size='33px'/>
                 <a href='https://www.linkedin.com/in/tahani-cherif-50815a214/' target="_blank"><p className='textcorrdoner' id='link'>in/cherif-tahani</p></a>
             </div>
             <div className='bloc'>
                 <BsGithub color='#2B7CD3'  font-size='33px'/>
                 <a href='https://github.com/tahani-cherif' target="_blank"><p className='textcorrdoner' id='link'>github.com/tahani-cherif</p></a>
             </div>
             <div className='bloc'>
                 <BsTelephoneFill color='#2B7CD3'  font-size='33px'/>
                 <p className='textcorrdoner' id='link'>27711622</p>
             </div>
        </div>
    )
}
