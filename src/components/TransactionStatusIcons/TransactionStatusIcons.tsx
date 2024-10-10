import React from 'react';
import styles from './styles.module.css';
import pendingIcon from '../../icons/pending.png'
import confirmedIcon from '../../icons/confirmed.png';
import inBlockIcon from '../../icons/inBlock.png';
import calculateTimestampAge from '../../utilityFunctions/calculateTimeStampAge';
import { useSelector } from 'react-redux';
import { RootState } from "../../redux/store";

const TransactionStatusIcons = () => {
    const { data } = useSelector((state: RootState) => state.transactionData);
    const {transactionData, pendingTransactionTime} = data;
    const {status} = transactionData || {};

    if (!status) {
        return(
            <section className={`transactionStatusInnerContainer ${styles.transactionStatusIconContainer}`}>
                <div>Data is missing or invalid.</div>
            </section>
        ) 
    }else{
        return(
            <section className={`transactionStatusInnerContainer ${styles.transactionStatusIconContainer}`}>
                    <div className={`${styles.iconContainer} ${!status.confirmed && !status.block_height? `${styles.currentStatus}`:''}`}>
                        <img alt="pending icon" src={pendingIcon}/>
                        <h5 className={styles.transactionIconStatus}>Pending {!status.confirmed? calculateTimestampAge(pendingTransactionTime[0], false):''}</h5>
                    </div>
                    <hr className={`${styles.iconLine} ${!status.confirmed && status.block_height ? `${styles.lineBeforeCurrent}` : ''}`}/>
                    <div className={`${styles.iconContainer}  ${status.confirmed?'':!status.confirmed && status.block_height? `${styles.currentStatus}` : `${styles.futureStatus}`}`}>
                        <img alt="in block icon" src={inBlockIcon}/>
                        <h5 className={styles.transactionIconStatus}>Included in block #{status.block_height}</h5>
                    </div>
                    <hr className={`${styles.iconLine}  ${status.confirmed? `${styles.lineBeforeCurrent}` : ''}`}/>
                    <div className={`${styles.iconContainer}  ${status.confirmed? `${styles.currentStatus}` : `${styles.currentStatus}`}`}>
                        <img alt="confirmed icon" src={confirmedIcon}/>
                        <h5 className={styles.transactionIconStatus}>Confirmed</h5>
                    </div>
            </section>
        )
    }
}

export default TransactionStatusIcons;