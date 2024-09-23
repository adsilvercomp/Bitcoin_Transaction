
import React from 'react';
import TransactionDetails from '../TransactionDetails/TransactionDetails';
import TransactionStatus from '../TransactionStatus/TransactionStatus';
import styles from './styles.css';
// import { useSelector } from 'react-redux';

const TransactionInfoContainer = () => {
    // const {data, loading, error} = useSelector((state) => state)

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