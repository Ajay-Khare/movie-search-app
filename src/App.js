import './App.css';
import { useEffect, useState } from "react"
function App() {
  const [data, setData] = useState([])

  const options = {
    method: 'GET'
  };

  useEffect(() => {
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=4968cf38&s=batman', options)
      .then(response => response.json())
      .then(response => {setData(response);console.log(response)})
      .catch(err => console.error(err));

  },[])

  return (
    <div className="mainContainer">
      
    </div>
  );
}

export default App;