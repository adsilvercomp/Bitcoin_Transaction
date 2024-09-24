import React from 'react';
import styles from './styles.css';
import copyIcon from '../../icons/copy.png';
import TransactionStatusIcons from '../TransactionStatusIcons/TransactionStatusIcons';
import { useSelector } from 'react-redux';

const TransactionStatus = () => {
    const { data } = useSelector((state) => state);
    const { txid, vin, vout, fee, status} = data;

    function calculateBtcAmount(){
        return vout.reduce((total, output) => total + output.value, 0) / 100000000;
    }

    return(
        <section className={'transactionStatusContainer transactionContainer'}>
            <section className={'transactionStatusHeaderContainer'}>
                <h2 className={'transactionStatusHeader'}>Bitcoin Transaction</h2>
                <h3 className={`transactionStatusBox ${status.confirmed? 'transactionStatusConfirmedBox': 'transactionStatusPendingBox'}`}>{status.confirmed?'Confirmed':'Pending'}</h3>
            </section>
            <section className={'transactionIdSection'}>
                <p className={'transactionId'}>{txid}</p>
                <input className={'copyTransactionId'} type='image' alt="copy transaction id" src={copyIcon}/>
            </section>

            <p className={'transactionStatusDescription'}>This transaction was first broadcasted on the Bitcoin network on <span className={'textHighlight'}>May 23, 2024 at 06:05 AM GMT+2.</span> The transaction currently has <span className={'textHighlight'}>17 confirmations</span> on the network. The current value of this transaction is now <span className={'textHighlight'}>$153.93.</span></p>

            <TransactionStatusIcons/>

            <section className={'transactionStatusInnerContainer transactionStatusInfoContainer'}>
                <section className={'transactionStatusInfo'}>
                    <div className={'statusInfoSection'}>
                        <h5 className="detailText statusInfoHeader">Amount</h5>
                        <p className="detailText"><span className='textHighlight'>{calculateBtcAmount()}</span> BTC</p>
                        <p className="detailText">$32,843.28</p>
                    </div>
                    <div className={'statusInfoSection'}>
                        <h5 className="detailText statusInfoHeader">Fees</h5>
                        <p className="detailText"><span className='textHighlight'>{fee}</span> SATS</p>
                        <p className="detailText">$517.49</p>
                    </div>
                </section>
                <hr className={'divider'} />
                <section className={'transactionStatusInfo'}>
                    <div className={'statusInfoSection'}>
                        <h5 className="detailText statusInfoHeader">From</h5>
                        <p className="detailText"><span className='textHighlight'>{vin.length} inputs</span></p>
                    </div>
                    <div className={'statusInfoSection'}>
                        <h5 className="detailText statusInfoHeader">To</h5>
                        <p className="detailText"><span className='textHighlight'>{vout.length} outputs</span></p>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default TransactionStatus;