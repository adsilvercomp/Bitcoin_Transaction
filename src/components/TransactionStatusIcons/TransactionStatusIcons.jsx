import React from 'react';
import styles from './styles.css';
import pendingIcon from '../../icons/pending.png'
import confirmedIcon from '../../icons/confirmed.png';
import inBlockIcon from '../../icons/inBlock.png';
const TransactionStatusIcons = () => {
    return(
        <section className={'transactionStatusIconContainer'}>
            <section className={'transactionStatusIconInnerContainer'}>
                <div className={'iconContainer'}>
                    <img src={pendingIcon}/>
                    <h5 className='transactionIconStatus'>Pending 2h 23m</h5>
                </div>
                <hr className={'iconLine'}/>
                <div className={'iconContainer'}>
                        <img src={inBlockIcon}/>
                        <h5 className='transactionIconStatus'>Included in block #844712</h5>
                </div>
                <hr className={'iconLine'}/>
                <div className={'iconContainer'}>
                        <img src={confirmedIcon}/>
                        <h5 className='transactionIconStatus'>Confirmed</h5>
                </div>
            </section>
          
        </section>
    )
}

export default TransactionStatusIcons;