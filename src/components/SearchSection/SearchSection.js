import React from 'react';
import { useState } from 'react';

const SearchSection = (props) =>{
  console.log("search section props",props);
  const [searchText, setSearchText] = useState([]);
 
  const handleTextChange =(event)=>{
    console.log("handleTextChange is ", event.target.value)
    setSearchText(event.target.value);
    
  };

  const handleButtonClick =() =>{
    console.log("handlebuttonclick value  ", searchText)
    return props.fetchEvent(searchText);
  };
    
  return(
  <div>
    <div className="moviesearchform">
      <h3>OMDB Movie Search </h3>
      <div className="form">
        <label>Title:</label>
        <input className="inputmoviedetails" type="text"  id="mtitle" name="mtitle" onChange={handleTextChange}/>
        <label>Year:</label>
        <input className="inputmoviedetails" type="text" id="year" name="year"/>
        <select id="mtype" name="mtype">
          <option value="short">Short</option>
          <option value="full">Full</option>
        </select>
        <select id="rtype" name="rtype">
          <option value="jsonr">XML</option>
          <option value="xmlr">JSON</option>
        </select>
        <button className="btn" onClick={() => props.fetchEvent(searchText)}>Submit</button>
      </div>
    </div>
  </div>
    );
  };

export default SearchSection;