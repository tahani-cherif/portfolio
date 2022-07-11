import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './/header.css'
import Competence from '../competance/competance';
import Experience from '../experience/experience';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate()

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  //onClick={() => navigate('/Compretance')}  
    return (
        <div className='box'>
      <Box  className="navbar">
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
          <LinkTab label="Accueil" href="/drafts"  />
          <LinkTab label="Compétences" href={<Competence/>} />
          <LinkTab label="Etudes" href="/drafts" />
          <LinkTab label="Expériences professionnelles" href={<Experience/>} />
          <LinkTab label="Portfolio" href="/spam" />
          <LinkTab label="Contact" href="/spam" />
        </Tabs>
      </Box>
      </div>
    );
  }