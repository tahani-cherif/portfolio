 import {AiOutlineUser} from 'react-icons/ai'
 import {ImMail4} from 'react-icons/im'
 import {GoMailRead} from 'react-icons/go'
import emailjs from 'emailjs-com'
 import { useState } from 'react';
 import { Alert ,AlertTitle} from '@mui/material';
 export default function Formulaire(){
  const [nomprenom,setNomPrenom]=useState('')
  const [mail,setMail]=useState('')
  const [messg,setMessg]=useState('')
  const [ret,setRet]=useState(false)
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_7onzyy4', 'template_fnn333k', e.target, 'QYXhiPZYdEwMF_Mgo')
    .then((result) => {
    console.log(result.text);
    setRet(true)
    }, (error) => {
    console.log(error.text);
    });
  
    }
    return(
        <div className='formulaire'>
            <form onSubmit={sendEmail}>
          <div className='ligneform'>
            <AiOutlineUser    color='#2B7CD3' font-size="34px"     margin-bottom="-8px"/>
            <input type="text" required placeholder='Nom  Prenom ' value={nomprenom} onChange={(e)=>setNomPrenom(e.target.value)} name='name'/>
           </div>
           <div className='ligneform'>
            <ImMail4    color='#2B7CD3' font-size="34px"     margin-bottom="-8px"  />
            <input type="email" required placeholder='Adress mail ' value={mail} onChange={(e)=>setMail(e.target.value)} name='mail'/>
           </div>
           <div className='ligneform'>
            <GoMailRead    color='#2B7CD3' font-size="34px"     margin-bottom="-8px"  />
            <input type="text" required placeholder='Message ' value={messg} onChange={(e)=>setMessg(e.target.value)} name='msg'/>
           </div>
           <button type='submit'>Envoyer</button>
           
           {
            ret ? <Alert className='success-pop' severity="success">
                    <AlertTitle>Succès</AlertTitle>
                      Message envoyer !
                 </Alert>:null
           }
           </form>
       </div>)
  }