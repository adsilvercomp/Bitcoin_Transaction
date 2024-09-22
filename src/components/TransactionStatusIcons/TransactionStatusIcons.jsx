import React from 'react';
import styles from './styles.css';
import pendingIcon from '../../icons/pending.png'
import confirmedIcon from '../../icons/confirmed.png';
import inBlockIcon from '../../icons/inBlock.png';
const TransactionStatusIcons = () => {
    return(
        <section className={'transactionStatusInnerContainer transactionStatusIconContainer'}>
                <div className={'iconContainer'}>
                    <img alt="pending icon" src={pendingIcon}/>
                    <h5 className='transactionIconStatus'>Pending 2h 23m</h5>
                </div>
                <hr className={'iconLine lineBeforeCurrent'}/>
                <div className={'iconContainer currentStatus'}>
                    <img alt="in block icoin" src={inBlockIcon}/>
                    <h5 className='transactionIconStatus'>Included in block #844712</h5>
                </div>
                <hr className={'iconLine'}/>
                <div className={'iconContainer futureStatus'}>
                    <img alt="confirmed icon" src={confirmedIcon}/>
                    <h5 className='transactionIconStatus'>Confirmed</h5>
                </div>
        </section>
    )
}

export default TransactionStatusIcons;