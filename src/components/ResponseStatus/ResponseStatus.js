import React from 'react';
import './ResponseStatus.css'


const ResponseStatus = (arrResponse) => {
  console.log('the status of arrayResponse is ', arrResponse.arrResponse);
  if(arrResponse.arrResponse === 'False'){
    return (
    <div className="response-output">
      <p>No results found!</p>
    </div>
  );
  }else if(arrResponse.arrResponse === 'True'){
     console.log('the status of arrayResponse is ', arrResponse.arrResponse);
    return(
      <div className="response-output">Results found!</div>
    )
  }else{
    return <div></div>
  }
  
  
  
};

export default ResponseStatus;