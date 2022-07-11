 import {AiOutlineUser} from 'react-icons/ai'
 import {ImMail4} from 'react-icons/im'
 import {GoMailRead} from 'react-icons/go'

 export default function Formulaire(){
    return(
        <div className='formulaire'>
            <form >
          <div className='ligneform'>
            <AiOutlineUser    color='#2B7CD3' font-size="34px"     margin-bottom="-8px"/>
            <input type="text" required placeholder='Num  Prenom '/>
           </div>
           <div className='ligneform'>
            <ImMail4    color='#2B7CD3' font-size="34px"     margin-bottom="-8px"/>
            <input type="email" required placeholder='Adress mail '/>
           </div>
           <div className='ligneform'>
            <GoMailRead    color='#2B7CD3' font-size="34px"     margin-bottom="-8px"/>
            <input type="text" required placeholder='Message '/>
           </div>
           <button type='submit'>Envoyer</button>
           </form>
       </div>)
  }