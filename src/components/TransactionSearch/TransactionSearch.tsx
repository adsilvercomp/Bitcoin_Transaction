import React, { useState } from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { fetchTransactionData } from '../../redux/transactionDataSlice';
import type { AppDispatch } from '../../redux/store';

const TransactionSearch = () => {
  const [transactionId, setTransactionId] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const submitHandler = () => {
    dispatch(fetchTransactionData(transactionId));
  };

  return (
    <section className={styles.transactionSearchContainer}>
      <div className={styles.transactionSearchInnerContainer}>
        <label className={styles.transactionSearchLabel}>Transaction ID</label>
        <input
          placeholder={'Enter Transaction ID'}
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className={styles.transactionSearchInput}
          type="text"
        ></input>
      </div>
      <button disabled={!transactionId.length} onClick={() => submitHandler()} className={`${styles.searchButton} ${!transactionId.length ? `${styles.disabledButton}` : ''}`}>
        Search
      </button>
    </section>
  );
};

export default TransactionSearch;
