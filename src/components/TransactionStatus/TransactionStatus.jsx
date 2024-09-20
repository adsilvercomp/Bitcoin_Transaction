import React from 'react';
import styles from './styles.css';
import copyIcon from '../../icons/copy.png';
import TransactionStatusIcons from '../TransactionStatusIcons/TransactionStatusIcons';
const TransactionStatus = () => {
    return(
        <section className={'transactionStatusContainer transactionContainer'}>
            <section className={'transactionStatusHeaderContainer'}>
                <h2 className={'transactionStatusHeader'}>Bitcoin Transaction</h2>
                <h3 className={`transactionStatusBox transactionStatusConfirmedBox`}>Confirmed</h3>
            </section>
            <section className={'transactionIdSection'}>
                <p className={'transactionId'}>absw2123dxxxxsxdcoi23sdfsdfsdfsdfsdfsdfsdfsdf4234234</p>
                <input className={'copyTransactionId'} type='image' src={copyIcon}/>
            </section>

            <p className={'transactionStatusDescription'}>This transaction was first broadcasted on the Bitcoin network on <span className={'textHighlight'}>May 23, 2024 at 06:05 AM GMT+2.</span> The transaction currently has <span className={'textHighlight'}>17 confirmations</span> on the network. The current value of this transaction is now <span className={'textHighlight'}>$153.93.</span></p>

            <TransactionStatusIcons/>
        </section>
    )
}

export default TransactionStatus;