import React, { useState,useEffect } from 'react';
import './App.css';

import Controller from './controller';

const Apptitle = "Basic Information on Users";


const App=()=> {
  const [error, setError] = useState(null);
  const [filterValue, setfilterValue] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => console.log(filterValue+" at begining"), [filterValue,isChecked]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    // console.log(items);
  }

  

  const handleInputChange =  (e) => {
     setfilterValue(e.target.value);
     setIsChecked(true);
}; 


  
  return (
    <div>

    <div>
      <h1 className="info"> {Apptitle} </h1>
    </div>

    <div className="labels"> 
    <h1>Filter by:</h1>
    <input type="radio" id="html" name="gender" value="male" onChange={handleInputChange}/>
    <label >Male</label>
    <input type="radio" id="css" name="gender" value="female" onChange={handleInputChange}/>
    <label >Female</label>
    </div> 

    <div>
      <Controller filterData={filterValue} items={items}  isChecked={isChecked}/>
    </div>


  </div>
  );
  }

export default App;
