import ".//experience.css"
 export default function Experience(){
      return(<div className="exp" id="experience">
             <p className="textexp">Expériences professionnelles</p>
            <div className="post">
            <img src="./wazolab.png" className="logo"/>
            <div className="desc">
            <p style={{marginLeft: "-109px",color:"#2B7CD3"}}>WAZOLAB</p>
            <ul className="liste">
              <li className="li">
                 Emploi temps plein juin 2022-present .    
              </li>
              <li className="li">Développeur Full Stack</li>
            </ul>
            </div>
            </div>
            <div className="post">
            <img src="./startdev.png"className="logo" />
            <div className="desc">
            <p style={{marginLeft: "-109px",color:"#2B7CD3"}}>StartDevelopment</p>
            <ul className="liste">
              <li className="li">
                 Stage fin d'étude 1 février au 30 avril 2022 .    
              </li>
              <li className="li">Développement mobile</li>
            </ul>
            </div>
            </div>
            <div className="post">
            <img src="./centre.png"className="logo" />
            <div className="desc">
            <p style={{marginLeft: "-80px" ,color:"#2B7CD3"}}>Centre D'innovation</p>
            <ul className="liste">
              <li className="li">
              Stage fin d'année Le mois du juillet 2021 .    
              </li>
              <li className="li">Blockchain</li>
            </ul>
            </div>
            </div>
         </div>)
  }