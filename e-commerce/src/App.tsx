import React,{useCallback,useState} from "react";
import Home from "./pages/Home";
import axios from 'axios'
import "../src/style.css";
import ProductCard from "./components/productCard";


const App = () => {
     const [Data, setData] = useState([])
  const handleFetchResources = useCallback(async (term:string) => {
let response = await axios.get(`http://localhost:3030/${term}`)
let responseData = response.data
setData(responseData)

  },[])
  console.log(Data)
  return (
    <div className="App">
   <Home FetchData={handleFetchResources} Datas = {Data} />
    </div>
  );
};

export default App;
