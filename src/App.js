import './App.css';
import {useState} from "react"
function App() {
  const [data, setData] = useState([])
  
  const options = {
    method: 'GET'
  };

  fetch('https://www.omdbapi.com/?i=tt3896198&apikey=4968cf38&&s=harry', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  return (
    <div className="App">
      <h1>hiii</h1>
    </div>
  );
}

export default App;