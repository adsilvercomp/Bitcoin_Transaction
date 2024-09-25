import React from 'react';
import styles from './styles.css';
import star from '../../icons/star.png';
import ellipsis from '../../icons/ellipsis.png';
import addCommas from '../../utilityFunctions/addCommas';
import convertBtcToUSD from '../../utilityFunctions/convertBtcToUSD';
import convertSatToBTC from '../../utilityFunctions/convertSatToBTC';
import {useSelector} from 'react-redux';

const TransactionDetails = () => {
    const { data } = useSelector((state) => state.transactionData);
    const { transactionData, conversionData } = data || {};
    const { fee, size, weight, status} = transactionData || {};
    const { USD } = conversionData || {};
    
    // Error Handling for Missing or Invalid Data
    if (!transactionData || !conversionData) {
        return <div>Data is missing or invalid.</div>;
    }

    const FeestoDollars = convertBtcToUSD(convertSatToBTC(fee), USD);

    function convertTimestamp(timestamp, timezoneOffset = 2) {
        // Create a new Date object from the timestamp (in milliseconds)
        const date = new Date(timestamp * 1000);
      
        // Adjust the timezone offset in milliseconds
        date.setTime(date.getTime() + (timezoneOffset * 60 * 60 * 1000));
      
        // Format the date and time as desired
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
        const formattedDate = date.toLocaleString('en-US', options);
      
        // Extract the year, month, day, hour, and minute from the formatted string
        const [year, month, day, hour, minute] = formattedDate.match(/\d+/g);
     
        // Return the desired format
        return `${year}-${month}-${day} ${hour}:${minute}`;
    }

    function calculateAge(timestamp) {
        const currentTime = new Date();
        const transactionTime = new Date(timestamp * 1000); // Convert timestamp to milliseconds
      
        const age = currentTime - transactionTime;
        const hours = Math.floor(age / (1000 * 60 * 60));
        const minutes = Math.floor((age % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((age % (1000 * 60)) / 1000);
      
        return `${hours}h ${minutes}m ${seconds}s`;
    }

    function roundToNearestTenth(number) {
        return Math.round(number * 10) / 10;
    }   


    return(
        <section className={'transactionContainer'}>
            <section className={'buttonContainer'}>
                <input className={'dashboardButton'} type='image' alt="star button" src={star}/>
                <input className={'dashboardButton'} type='image' alt="ellipsis button" src={ellipsis}/>
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
                        <td className={'detailText cellPadding'}><span className='textHighlight'>{status.confirmed?convertTimestamp(status.block_time):'Pending'}</span></td>
                    </tr>
                    <tr>
                        <td className={'detailText cellPadding'}>Age</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>{status.confirmed? calculateAge(status.block_time):'Pending'}</span></td>
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
                        <td className={'detailText cellPadding'}><span className='textHighlight'>{addCommas(fee)}</span> SATS - ${FeestoDollars}</td>
                    </tr>

                    <tr>
                        <td className={'detailText cellPadding'}>Fee rate</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>{roundToNearestTenth(fee/(weight/4))}</span> SATS/VB</td>
                    </tr>

                    <tr>
                        <td className={'detailText cellPadding'}>Effective fee rate</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>{roundToNearestTenth(fee/size)}</span> SATS/VB</td>
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
                        <td className={'detailText cellPadding'}><span className='textHighlight'>{addCommas(size)}</span> B</td>
                    </tr>

                    <tr>
                        <td className={'detailText cellPadding'}>Virtual size</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>{addCommas(weight/4)}</span> VB</td>
                    </tr>

                    <tr>
                        <td className={'detailText cellPadding'}>Adjusted size</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>{addCommas(weight/4)}</span> VB</td>
                    </tr>

                    <tr>
                        <td className={'detailText cellPadding'}>Weight</td>
                        <td className={'detailText cellPadding'}><span className='textHighlight'>{addCommas(weight)}</span> WU</td>
                    </tr>
                </tbody>
            </table>        
            
        </section>
    )
}

export default TransactionDetails;