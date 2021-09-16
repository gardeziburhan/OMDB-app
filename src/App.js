import React, {useState, useEffect} from 'react'
import MovieListing from './components/movielisting/movieListing';
import './App.css';
import movieApi from './movieapi/movieApi';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ResponseStatus from './components/ResponseStatus/ResponseStatus';

function App() {
  const [outputArr, setOutputArr] = useState([]);
  const [arrResponse, setArrResponse] = useState('');

  const fetchMovies = async(searchText) => {
      setArrResponse('Pending');
      const response =await  movieApi.get(`?apikey=3123e26a&s=${searchText}&type=movie`)
      console.log(response)
      console.log(response.data.Response)
      if (response.data.Response === "True"){
        setArrResponse('True');
        setOutputArr(response.data.Search);
      }
      else{
        setArrResponse('False')
        setOutputArr([])
      }
  }
  
  console.log("The output is: ", outputArr)
  return (
    <div className='container'>
      <Header/>
      <SearchSection fetchMovies={fetchMovies} />
      <ResponseStatus arrResponse={arrResponse}/>
      <MovieListing movie={outputArr}/>
      <Footer/>
    </div>
  );
}

function SearchSection(props){

  const [searchText, setSearchText] = useState([]);
 
  const handleTextChange =(event)=>{
    setSearchText(event.target.value);
    
  };

  const handleButtonClick =() =>{
    return props.fetchMovies(searchText);
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
        <button className="btn" onClick={handleButtonClick}>Submit</button>
      </div>
    </div>
  </div>
    );
  };

export default App

