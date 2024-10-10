
import React from 'react';
import './App.css';
import TransactionSearch from './components/TransactionSearch/TransactionSearch';
import TransactionInfoContainer from './components/TransactionInfoContainer/TransactionInfoContainer';
import Loader from './components/Loader/Loader';
import Error from './components/Error/Error';
import DefaultScreen from './components/DefaultScreen/DefaultScreen';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';


function App() { 

  const {data, loading, error} = useSelector((state: RootState) => state.transactionData);

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
