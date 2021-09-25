  import React, {useState} from 'react'
  import './App.css';
  import MovieListing from './components/movielisting/movieListing';
  import SearchSection from './components/SearchSection/SearchSection'
  import Header from './components/Header/Header';
  import Footer from './components/Footer/Footer';
  import ResponseStatus from './components/ResponseStatus/ResponseStatus';
  import {getUsers} from './store/actions/userActions';
  import { useDispatch,useSelector } from 'react-redux';




  function App(props) {

    const usersListData = useSelector((state) => state.usersList);
    
    function useFetchEvents(searchText) {
      const dispatch = useDispatch()
      console.log("the Search text of usefetchevents", searchText)
      return (searchText) => {
        // Redux action. requestEvents returns object with type.
        dispatch(getUsers(searchText))
      }
    }
    console.log('the error status is', usersListData.error)
    
    console.log(" userlistdata is:",usersListData)
   const fetchEvent = useFetchEvents();

  return (
    
      <div className='container'>
        <Header/>
        <SearchSection fetchEvent={fetchEvent} />
        <ResponseStatus arrResponse={usersListData.error}/>
        <MovieListing movie={usersListData.users}/>
        <Footer/>
      </div>
    
  );}

  export default App;

// fetching movies without using redux

//   const fetchMovies = async(searchText) => {
//     console.log("The value of search Text  in fetch movies, ", searchText)
    
//     setArrResponse('Pending');
//       const response = await movieApi.get(`?apikey=3123e26a&s=${searchText}&type=movie`)
//       console.log("The value of response from the url is", response)
//       console.log("The movies from the url are",response.data.Response)
//       if (response.data.Response === "True"){
//         setArrResponse('True');
//         setOutputArr(response.data.Search);
//       }
//       else{
//         setArrResponse('False')
//         setOutputArr([])
//       }   
//   console.log("The output array for the list of movies are: ", outputArr, arrResponse)
// }