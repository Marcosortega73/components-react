
import './App.css';
import { Form } from './Form';

const customThemeBox = {

  marginTop:'50px',
  bgcolor: "#cca500", 
  height: "100%", 
  width: "50%",
  borderRadius:"15px",
  boxShadow:"1px 2px 5px 3px rgba(0,0,0,0.75)"

}


function App() {
  return (
    <div className="App">
     <Form data={customThemeBox}/>
    </div>
  );
}

export default App;
