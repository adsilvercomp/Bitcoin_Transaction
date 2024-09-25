
import React from 'react';
import TransactionDetails from '../TransactionDetails/TransactionDetails';
import TransactionStatus from '../TransactionStatus/TransactionStatus';
import styles from './styles.css';

const TransactionInfoContainer = () => {
    return (
        <div className={'outerContainer'}>
            <div className={'transactionOuterContainer'}>
                <TransactionStatus/>
                <TransactionDetails/>
            </div>
        </div>
    )
}

export default TransactionInfoContainer;