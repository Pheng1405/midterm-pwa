import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import { getAllClothes } from './api/cloth';

function App() {
  const [clothesData, setClothesData] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const data = await getAllClothes();
      console.log(data);
      setClothesData(data);
    }
    fetchData();
  },[]);
  
  return (
    <div className="App">
      <div>
        <div style={{display : 'flex', flexDirection: 'row', flexWrap : 'wrap'}}>
        {
          clothesData?.map((e,i)=>{
            return (
              
                <div key={i} style={{width : '250px', height: '250px', margin: '40px'}}>
                  <img src={e.image} style={{width: '100%', height : '100%'}}/>
                  <p>{e.title}</p>
                </div>
              
            )
          })
          
        }
        </div>
      </div>
    </div>
  );
}

export default App;
