import React from 'react';
import TransactionDetails from '../TransactionDetails/TransactionDetails';
import TransactionStatus from '../TransactionStatus/TransactionStatus';
import styles from './styles.module.css';

const TransactionInfoContainer = () => {
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.transactionOuterContainer}`}>
        <TransactionStatus />
        <TransactionDetails />
      </div>
    </div>
  );
};

export default TransactionInfoContainer;
