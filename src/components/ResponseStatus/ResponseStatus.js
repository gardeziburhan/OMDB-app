import React from 'react';
import './ResponseStatus.css'


const ResponseStatus = (arrResponse) => {
    console.log(" arrResponse in ResponseStatus", arrResponse.arrResponse)
  if(arrResponse.arrResponse == false){
    console.log('the status of arrayResponse in ResponseStatus is ', arrResponse);

    return (
      
    <div className="response-output">Results found!</div>
  );
  }else if(arrResponse.arrResponse == true){
     console.log('the status of arrayResponse in ResponseStatus (2) is ', arrResponse);
    return(
      <div className="response-output">
      <p>No results found!</p>
    </div>
      
    )
  }else{
    return <div></div>
  }
  
  
  
};

export default ResponseStatus;