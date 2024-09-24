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
                <input placeholder={'Enter Transaction ID'} value={transactionId} onChange={(e) => setTransactionId(e.target.value)} className="transactionSearchInput" type="text" ></input>
            </div>
            <button disabled={!transactionId.length} onClick={() => submitHandler()} className={`searchButton ${!transactionId.length? 'disabledButton' : '' }`}>Search</button>
        </section>
    )
}

export default TransactionSearch;