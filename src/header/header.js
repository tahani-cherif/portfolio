import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './/header.css'
import Competence from '../competance/competance';
import Experience from '../experience/experience';
import { useNavigate } from 'react-router-dom';
//import { Link} from "react-scroll";
import { NavHashLink as Link } from 'react-router-hash-link';
import { color } from '@mui/system';
function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
export default function NavTabs() {
    const [item,setItem]=React.useState(false)
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  //onClick={() => navigate('/Compretance')}  
    return (
        <div className='box'>
      <Box  className="navbar">
        <Link to="/#accueil" className="link"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000} onClick={()=>setItem(true)} style={item==true ?{
        color:"",
      }:{}}>Accueil</Link>
       <Link to="/#competence" className="link"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000} onClick={()=>setItem(true)} style={item==true ?{
        color:"",
      }:{}}>Compétences</Link>
       <Link to="/#etude" className="link"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000} onClick={()=>setItem(true)} style={item==true ?{
        color:"",
      }:{}}>Etudes</Link>
       <Link to="/#experience" className="link"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000} onClick={()=>setItem(true)} style={item==true ?{
        color:"",
      }:{}}>Expériences professionnelles</Link>
       <Link to="/#projet" className="link"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000} onClick={()=>setItem(true)} style={item==true ?{
        color:"",
      }:{}}>Portfolio</Link>
       <Link to="/#contact" className="link"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000} onClick={()=>setItem(true)} style={item==true ?{
        color:"",
      }:{}}>Contact</Link>
      
      </Box>
   
      </div>
    );
  }

  /*
   <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
    <LinkTab label="Accueil" href="/"/>
          <LinkTab label="Compétences"  />
          <LinkTab label="Etudes" />
          <LinkTab label="Expériences professionnelles"  />
          <LinkTab label="Portfolio"  />
        <LinkTab  label="Contact"></LinkTab>
          </Tabs>
        */