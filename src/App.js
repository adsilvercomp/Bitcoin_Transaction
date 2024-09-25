
import React from 'react';
import './App.css';
import TransactionSearch from './components/TransactionSearch/TransactionSearch';
import TransactionInfoContainer from './components/TransactionInfoContainer/TransactionInfoContainer';
import Loader from './components/Loader/Loader';
import Error from './components/Error/Error';
import DefaultScreen from './components/DefaultScreen/DefaultScreen';
import { useSelector } from 'react-redux';

function App() { 
  const {data, loading, error} = useSelector((state) => state.transactionData);

  return (
    <section className="appContainer">
      <TransactionSearch/>
      {
        loading?
          <Loader/>
        :error?
          <Error/>
        :data?
          <TransactionInfoContainer/>
        : 
          <DefaultScreen/>
      }
      
    </section>
  );
}

export default App;
