import React from 'react';
import styles from './styles.css';
import star from '../../icons/star.png';
import ellipsis from '../../icons/ellipsis.png';
const TransactionDetails = () => {
    return(
        <section className={'transactionContainer'}>
            <section className={'buttonContainer'}>
                <input className={'dashboardButton'} type='image' src={star}/>
                <input className={'dashboardButton'} type='image' src={ellipsis}/>
            </section>
            
            {/* transaction table */}
            <table className={'detailsTable'}>
                <thead>
                    <tr>
                        <th className={'tableHeader cellPading'}>Transaction</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={'detailText cellPadding'}>Timestamp</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>2024-05-11-24</span></td>
                    </tr>
                    <tr>
                        <td className={'detailText cellPadding'}>Age</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>4h 9m 57s</span></td>
                    </tr>
                </tbody>
            </table>    

            {/* fee table */}
            <table className={'detailsTable'}>
                <thead>
                    <tr>
                        <th className={'tableHeader cellPading'}>Fee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={'detailText cellPadding'}>Fee</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>3,341</span> SATS - $517.49</td>
                    </tr>

                    <tr>
                        <td className={'detailText cellPadding'}>Fee rate</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>25.7</span> SATS/VB</td>
                    </tr>

                    <tr>
                        <td className={'detailText cellPadding'}>Effective fee rate</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>26.5</span> SATS/VB</td>
                    </tr>

                    <tr>
                        <td className={'detailText cellPadding'}>Miner</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>Foundry USA</span></td>
                    </tr>
                </tbody>
            </table>      

            {/* details table */}
            <table className={'detailsTable'}>
                <thead>
                    <tr>
                        <th className={'tableHeader cellPading'}>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={'detailText cellPadding'}>Size</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>181</span> B</td>
                    </tr>

                    <tr>
                        <td className={'detailText cellPadding'}>Virtual size</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>130</span> VB</td>
                    </tr>

                    <tr>
                        <td className={'detailText cellPadding'}>Adjusted size</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>130</span> VB</td>
                    </tr>

                    <tr>
                        <td className={'detailText cellPadding'}>Weight</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>520</span> WU</td>
                    </tr>
                </tbody>
            </table>        
            
        </section>
    )
}

export default TransactionDetails;