import React from 'react';
import '../Sass/_CustomersList.scss';

const CustomersList = ({ customers }) => {

  const customersToCall = customers.map(customer => (
    <li className='customers__list-item' key={customer.login.sha1}>
      <img className='list-item__img' src={customer.picture.large} alt={`${customer.name.first} ${customer.name.last}`} title={`${customer.name.first} ${customer.name.last}`} />
      <p className='list-item__names'>Name: {`${customer.name.first[0].toUpperCase() + customer.name.first.slice(1)} ${customer.name.last[0].toUpperCase() + customer.name.last.slice(1)}`}</p>
      <p className="list-item__phone">Cell:  {customer.cell}</p>
      <p className="list-item__age">Age: {customer.dob.age}</p>
      <p className="list-item__age">Location:  {`${customer.location.city[0].toUpperCase() + customer.location.city.slice(1)}`}</p>
    </li>
  ))
  return (
    <div className='customers'>
      <ul className='customers__list'>
        {customersToCall}
      </ul>
    </div>
  );
}

export default CustomersList;