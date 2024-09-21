
import './App.css';
import TransactionDetails from './components/TransactionDetails/TransactionDetails';
import TransactionSearch from './components/TransactionSearch/TransactionSearch';
import TransactionStatus from './components/TransactionStatus/TransactionStatus';

function App() {
  return (
    <section className="appContainer">
      <TransactionSearch/>
      <div className='outerContainer'>
        <div className="transactionOuterContainer">
          <TransactionStatus/>
          <TransactionDetails/>
        </div>
      </div>
    </section>
  );
}

export default App;
