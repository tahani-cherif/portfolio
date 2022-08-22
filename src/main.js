import Accueil from './accueil/accueil';
import './App.css';
import Competence from './competance/competance';
import Contact from './contact/contact';
import Etude from './etudes/etudes';
import Experience from './experience/experience';
import Footer from './footer/footer';
import NavTabs from './header/header';
import Mainprojet from './projet/projet';
import ScrollButton from './scrollButton';



function Main() {
  return (
    <>
    <div className="app">
      <NavTabs/>
      <Accueil/>
      <Competence/>
      <div className='etudeexp'>
      <Etude/>
      <Experience className='exp'/>
      </div>
      <Mainprojet/>
      <Contact/>
      <Footer/>
      
    </div>
    <ScrollButton className="test"/>
     </>
  );
}

export default Main;
