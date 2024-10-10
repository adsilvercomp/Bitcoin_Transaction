import React from 'react';
import styles from './styles.module.css';
import star from '../../icons/star.png';
import ellipsis from '../../icons/ellipsis.png';
import addCommas from '../../utilityFunctions/addCommas';
import convertBtcToUSD from '../../utilityFunctions/convertBtcToUSD';
import convertSatToBTC from '../../utilityFunctions/convertSatToBTC';
import calculateTimestampAge from '../../utilityFunctions/calculateTimeStampAge';
import {useSelector} from 'react-redux';
import { RootState } from '../../redux/store'; 

const TransactionDetails = () => {
    const { data } = useSelector((state: RootState) => state.transactionData);
    const { transactionData, conversionData } = data || {};
    const { fee, size, weight, status} = transactionData || {};
    const { USD } = conversionData || {};
    
    // Error Handling for Missing or Invalid Data
    if (!transactionData || !conversionData) {
        return (
            <section className={'transactionContainer'}>
                <p>Data is missing or invalid.</p>
            </section>
        )
    }

    const weightToNum = parseInt(weight);

    const FeestoDollars = convertBtcToUSD(convertSatToBTC(fee), USD);

    function convertTimestamp(timestamp, timezoneOffset = 2) {
        // Create a new Date object from the timestamp (in milliseconds)
        const date = new Date(timestamp * 1000);
      
        // Adjust the timezone offset in milliseconds
        date.setTime(date.getTime() + (timezoneOffset * 60 * 60 * 1000));
      
        // Format the date and time as desire
        const formattedDate = date.toLocaleString('en-US', { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit', 
            hour: '2-digit', 
            minute: '2-digit', 
            timeZoneName: 'short' 
        });
      
        // Extract the year, month, day, hour, and minute from the formatted string
        const [year, month, day, hour, minute] = formattedDate.match(/\d+/g);
     
        // Return the desired format
        return `${year}-${month}-${day} ${hour}:${minute}`;
    }

    function roundToNearestTenth(number) {
        return Math.round(number * 10) / 10;
    }   


    return(
        <section className={'transactionContainer'}>
            <section className={styles.buttonContainer}>
                <input className={`${styles.dashboardButton}`} type='image' alt="star button" src={star}/>
                <input className={`${styles.dashboardButton}`} type='image' alt="ellipsis button" src={ellipsis}/>
            </section>
            
            {/* transaction table */}
            <table className={styles.detailsTable}>
                <thead>
                    <tr>
                        <th className={`${styles.tableHeader} ${styles.cellPading}`}>Transaction</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={`detailText ${styles.cellPadding}`}>Timestamp</td>
                        <td className={`detailText ${styles.cellPadding}`}><span className='textHighlight'>{status.confirmed?convertTimestamp(status.block_time):'Pending'}</span></td>
                    </tr>
                    <tr>
                        <td className={`detailText ${styles.cellPadding}`}>Age</td>
                        <td className={`detailText ${styles.cellPadding}`}><span className='textHighlight'>{status.confirmed? calculateTimestampAge(status.block_time, true):'Pending'}</span></td>
                    </tr>
                </tbody>
            </table>    

            {/* fee table */}
            <table className={styles.detailsTable}>
                <thead>
                    <tr>
                        <th className={`${styles.tableHeader} ${styles.cellPadding}`}>Fee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={`detailText ${styles.cellPadding}`}>Fee</td>
                        <td className={`detailText ${styles.cellPadding}`}><span className='textHighlight'>{addCommas(fee)}</span> SATS - ${FeestoDollars}</td>
                    </tr>

                    <tr>
                        <td className={`detailText ${styles.cellPadding}`}>Fee rate</td>
                        <td className={`detailText ${styles.cellPadding}`}><span className='textHighlight'>{roundToNearestTenth(fee/(weightToNum/4))}</span> SATS/VB</td>
                    </tr>

                    <tr>
                        <td className={`detailText ${styles.cellPadding}`}>Effective fee rate</td>
                        <td className={`detailText ${styles.cellPadding}`}><span className='textHighlight'>{roundToNearestTenth(fee/size)}</span> SATS/VB</td>
                    </tr>

                    <tr>
                        <td className={`detailText ${styles.cellPadding}`}>Miner</td>
                        <td className={`detailText ${styles.cellPadding}`}><span className='textHighlight'>Foundry USA</span></td>
                    </tr>
                </tbody>
            </table>      

            {/* details table */}
            <table className={styles.detailsTable}>
                <thead>
                    <tr>
                        <th className={`${styles.tableHeader} ${styles.cellPadding}`}>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={`detailText ${styles.cellPadding}`}>Size</td>
                        <td className={`detailText ${styles.cellPadding}`}><span className='textHighlight'>{addCommas(size)}</span> B</td>
                    </tr>

                    <tr>
                        <td className={`detailText ${styles.cellPadding}`}>Virtual size</td>
                        <td className={`detailText ${styles.cellPadding}`}><span className='textHighlight'>{addCommas(weightToNum/4)}</span> VB</td>
                    </tr>

                    <tr>
                        <td className={`detailText ${styles.cellPadding}`}>Adjusted size</td>
                        <td className={`detailText ${styles.cellPadding}`}><span className='textHighlight'>{addCommas(weightToNum/4)}</span> VB</td>
                    </tr>

                    <tr>
                        <td className={`detailText ${styles.cellPadding}`}>Weight</td>
                        <td className={`detailText ${styles.cellPadding}`}><span className='textHighlight'>{addCommas(weightToNum)}</span> WU</td>
                    </tr>
                </tbody>
            </table>        
            
        </section>
    )
}

export default TransactionDetails;