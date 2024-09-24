import React from 'react';
import styles from './styles.css';
import pendingIcon from '../../icons/pending.png'
import confirmedIcon from '../../icons/confirmed.png';
import inBlockIcon from '../../icons/inBlock.png';
import {useSelector} from 'react-redux';

const TransactionStatusIcons = () => {
    const { data } = useSelector((state) => state);
    const {transactionData} = data;
    const {status} = transactionData || {};
  
    if (!status) {
        return <div>Data is missing or invalid.</div>;
    }else{
        return(
            <section className={'transactionStatusInnerContainer transactionStatusIconContainer'}>
                    <div className={`iconContainer ${!status.confirmed && !status.block_height? 'currentStatus':''}`}>
                        <img alt="pending icon" src={pendingIcon}/>
                        <h5 className='transactionIconStatus'>Pending 2h 23m</h5>
                    </div>
                    <hr className={`iconLine ${!status.confirmed && status.block_height ? 'lineBeforeCurrent' : ''}`}/>
                    <div className={`iconContainer  ${status.confirmed?'':!status.confirmed && status.block_height? 'currentStatus' : 'futureStatus'}`}>
                        <img alt="in block icon" src={inBlockIcon}/>
                        <h5 className='transactionIconStatus'>Included in block #{status.block_height}</h5>
                    </div>
                    <hr className={`iconLine ${status.confirmed? 'lineBeforeCurrent' : ''}`}/>
                    <div className={`iconContainer  ${status.confirmed? 'currentStatus' : 'futureStatus'}`}>
                        <img alt="confirmed icon" src={confirmedIcon}/>
                        <h5 className='transactionIconStatus'>Confirmed</h5>
                    </div>
            </section>
        )
    }
}

export default TransactionStatusIcons;