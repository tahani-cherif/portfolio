import {BrowserRouter  ,Routes,Route} from 'react-router-dom'
import Competence from './competance/competance';
import Main from './main';
function App() {
  return (
  <>
 <BrowserRouter >
    <div className="App">
      <Routes>
            <Route exact path="/" element={<Main/>} />
            
          </Routes>
                
      </div>
      </BrowserRouter >
  </>
  );
}

export default App;
