import * as React from 'react';
import './/competance.css'
import CircularProgressWithLabel from './circulebar';
export default function Competence(){
    return(<div className='comp' id='competence'>
        <p className='titre'>Compétences</p>
       <div className='block'>
          <CircularProgressWithLabel value="50" nom="React js"/>
          <CircularProgressWithLabel value="80" nom="HTML"/>
          <CircularProgressWithLabel value="70" nom="Java Script"/>
          <CircularProgressWithLabel value="80" nom="CSS"/>
          <CircularProgressWithLabel value="70" nom="Java"/>
          <CircularProgressWithLabel value="40" nom="Phython"/>
          <CircularProgressWithLabel value="70" nom="PHP"/>
              </div>
              <div className='block'>
             <CircularProgressWithLabel value="80" nom="C"/>
             <CircularProgressWithLabel value="40" nom="C#"/>
             <CircularProgressWithLabel value="50" nom="JSON"/>
             <CircularProgressWithLabel value="30" nom="R"/>
             <CircularProgressWithLabel value="80" nom="SQL Server"/>
             <CircularProgressWithLabel value="80" nom="MySQL"/>
             <CircularProgressWithLabel value="80" nom="Firebase"/>
              </div>
              <div className='block'>
             <CircularProgressWithLabel value="70" nom="Bootstrap"/>
             <CircularProgressWithLabel value="30" nom="Nest js"/>
             <CircularProgressWithLabel value="30" nom="Express js"/>
             <CircularProgressWithLabel value="40" nom="Node js"/>
             <CircularProgressWithLabel value="60" nom="Wordpress"/>
             <CircularProgressWithLabel value="70" nom="Wix"/>
             <CircularProgressWithLabel value="80" nom="Android Studio"/>
             <CircularProgressWithLabel value="50" nom="POwer BI"/>
              </div>
    </div>)
}