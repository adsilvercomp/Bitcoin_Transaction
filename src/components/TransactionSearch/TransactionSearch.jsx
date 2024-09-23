import React, { useState } from 'react';
import styles from './styles.css';
import { useDispatch } from 'react-redux';
import { fetchTransactionData } from '../../redux/transactionDataSlice';


const TransactionSearch  = () => {
    const [transactionId, setTransactionId] = useState('');
    const dispatch = useDispatch();

    const submitHandler = () => {
        dispatch(fetchTransactionData(transactionId));
    }
    
    return (
        <section className="transactionSearchContainer">
            <div className="transactionSearchInnerContainer">
                <label className="transactionSearchLabel" for="Transaction ID">Transaction ID</label>
                <input value={transactionId} onChange={(e) => setTransactionId(e.target.value)} className="transactionSearchInput" type="text" ></input>
            </div>
            <button onClick={() => submitHandler()} className="searchButton">Search</button>
        </section>
    )
}

export default TransactionSearch;