
import React from 'react';
import './App.css';
import TransactionSearch from './components/TransactionSearch/TransactionSearch';
import TransactionInfoContainer from './components/TransactionInfoContainer/TransactionInfoContainer';
import Loader from './components/Loader/Loader';
import { useSelector } from 'react-redux';

function App() { 
  const {data, loading, error} = useSelector((state) => state);

  return (
    <section className="appContainer">
      <TransactionSearch/>
      {
        loading?
          <Loader/>
        :error?
          <h2>error</h2>
        :data?
          <TransactionInfoContainer/>
        : 
          <p>Search for your bitcoin transaction</p>
      }
      
    </section>
  );
}

export default App;
