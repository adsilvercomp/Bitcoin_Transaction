
import './App.css';
import TransactionDetails from './components/TransactionDetails';
import TransactionSearch from './components/TransactionSearch/TransactionSearch';
import TransactionStatus from './components/TransactionStatus';

function App() {
  return (
    <section className="appContainer">
      <TransactionSearch/>
    </section>
  );
}

export default App;
