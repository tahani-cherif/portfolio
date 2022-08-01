import * as React from 'react';
import Box from '@mui/material/Box';
import {AiOutlineMenu} from 'react-icons/ai'
import './/header.css'
import { NavHashLink as Link } from 'react-router-hash-link';

export default function NavTabs() {
    const isMobile = window.innerWidth <= 768;
    const [etatmenu,setEtatmenu]=React.useState(false)
     console.log(etatmenu)
    return (
        <div className='box'>
        {
          isMobile ?
          <Box  className="navbar" id="mobile" >
            <div className='menu'>
          <AiOutlineMenu color='#2B7CD3' onClick={()=>{etatmenu ? setEtatmenu(false) :setEtatmenu(true)}}/>
           <p className='title'>Menu</p>
           </div>
           {
            etatmenu ?
            <div className='menu-mobile'>
            <ul className='navigation-menu'>
            <Link to="/#accueil" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}>
            <li  onClick={()=>{ setEtatmenu(false) }}>Accueil</li></Link>
            <Link to="/#competence" 
             spy={true}
             smooth={true}
             offset={-70}
             duration={1000}>
             <li onClick={()=>{ setEtatmenu(false) }}>Compétences</li></Link>
            <Link to="/#etude" 
             spy={true}
             smooth={true}
             offset={-70}
             duration={1000} >
            <li onClick={()=>{ setEtatmenu(false) }}>Etudes</li></Link>
            <Link to="/#experience" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000} >
            <li onClick={()=>{ setEtatmenu(false) }}>Expériences professionnelles</li></Link>
           <Link to="/#projet" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000} >
            <li onClick={()=>{ setEtatmenu(false) }}>Portfolio</li></Link>
          <Link to="/#contact" 
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000} >
            <li onClick={()=>{ setEtatmenu(false) }}>Contact</li></Link>
            </ul>
           </div>
           :null
           }
          </Box>
          :
      <Box  className="navbar">
        <Link to="/#accueil" className="link"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000} >Accueil</Link>
       <Link to="/#competence" className="link"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}>Compétences</Link>
       <Link to="/#etude" className="link"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000} >Etudes</Link>
       <Link to="/#experience" className="link"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000} >Expériences professionnelles</Link>
       <Link to="/#projet" className="link"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000} >Portfolio</Link>
       <Link to="/#contact" className="link"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000} >Contact</Link>
      </Box>}
    </div>
    );
  }