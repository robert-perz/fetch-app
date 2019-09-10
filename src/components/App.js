import React, { Component } from 'react';
import FetchClients from './FetchClients';
import CustomersList from './CustomersList';
import '../Sass/import.scss';

const API = 'https://randomuser.me/api/?results=1'

class App extends Component {
  state = {
    customers: []
  }
  handleFetchData = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        };
        throw new Error(response.status)
      })
      .then(response => response.json())
      .then(data => {
        const customer = data.results;
        this.setState(prevState => ({
          customers: prevState.customers.concat(customer)
        })
        )
      })
      .catch(error => alert(`${Error(error)} Try again, please.`))
  }
  render() {
    const customers = this.state.customers;
    return (
      <>
        <h1 className='app-title'>Database of customers</h1>
        <FetchClients
          fetchData={this.handleFetchData}
        />
        {customers.length > 0 ? <CustomersList customers={customers} /> : customers}
      </>
    );
  }
}

export default App;