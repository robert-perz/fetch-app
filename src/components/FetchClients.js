import React from 'react';
import '../Sass/_FetchClients.scss';


const FetchClients = props => {
  return (
    <>
      <button className="fetch-btn" onClick={props.fetchData}>Next customer
            </button>
    </>
  );
}

export default FetchClients;