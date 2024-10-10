import React, { useState, useRef } from 'react';
import styles from './styles.module.css';
import copyIcon from '../../icons/copy.png';
import TransactionStatusIcons from '../TransactionStatusIcons/TransactionStatusIcons';
import addCommas from '../../utilityFunctions/addCommas';
import convertBtcToUSD from '../../utilityFunctions/convertBtcToUSD';
import convertSatToBTC from '../../utilityFunctions/convertSatToBTC';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const TransactionStatus = () => {
  // get global state from redux
  const { data } = useSelector((state: RootState) => state.transactionData);
  // destructure global state
  const { transactionData, conversionData, pendingTransactionTime } = data || {};
  const { txid, vin, vout, fee, status } = transactionData || {};
  const { USD } = conversionData || {};

  // put ref for transaction id so that it can be copied to clipboard
  const textRef = useRef(null);
  const [toggleCopyMessage, setToggleCopyMessage] = useState(false);

  // Error Handling for Missing or Invalid Data
  if (!transactionData || !conversionData) {
    return (
      <section className={'transactionStatusContainer transactionContainer'}>
        <p>Data is missing or invalid.</p>
      </section>
    );
  }

  const BTCAmount = vout.reduce((total, output) => total + output.value, 0) / 100000000;
  const BTCtoDollars = convertBtcToUSD(BTCAmount, USD);
  const FeestoDollars = convertBtcToUSD(convertSatToBTC(fee), USD);

  function pendingTimeConversion(timestamp) {
    // Create a new Date object from the timestamp
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds
    // Format the date and time
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false, // Use 24-hour format
      timeZone: 'GMT',
    };
    // @ts-ignore
    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate;
  }

  function handleCopy() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textRef.current.textContent);
    } else {
      console.error('Clipboard API not supported');
    }

    // toggle copyMessage
    triggerCopyMessage();
  }

  function triggerCopyMessage() {
    setToggleCopyMessage(true);
    setTimeout(() => {
      setToggleCopyMessage(false);
    }, 1000);
  }

  return (
    <section className={`transactionContainer ${styles.transactionStatusContainer} `}>
      <section className={styles.transactionStatusHeaderContainer}>
        <h2 className={styles.transactionStatusHeader}>Bitcoin Transaction</h2>
        <h3 className={`${styles.transactionStatusBox} ${status.confirmed ? `${styles.transactionStatusConfirmedBox}` : `${styles.transactionStatusPendingBox}`}`}>
          {status.confirmed ? 'Confirmed' : 'Pending'}
        </h3>
      </section>
      <section className={styles.transactionIdSection}>
        {toggleCopyMessage ? (
          <p ref={textRef} className={styles.transactionId}>
            Copied to Clipboard!
          </p>
        ) : (
          <>
            <p ref={textRef} className={styles.transactionId}>
              {txid}
            </p>
            <input onClick={() => handleCopy()} className={styles.copyTransactionId} type="image" alt="copy transaction id" src={copyIcon} />
          </>
        )}
      </section>

      {pendingTransactionTime[0] !== 0 ? (
        <p className={styles.transactionStatusDescription}>
          This transaction was first broadcasted on the Bitcoin network on <span className={styles.textHighlight}>{pendingTimeConversion(pendingTransactionTime[0])}.</span>{' '}
          The current value of this transaction (amount + fees) is now <span className={styles.textHighlight}>${addCommas(BTCtoDollars + FeestoDollars)}.</span>
        </p>
      ) : (
        <p className={styles.transactionStatusDescription}>
          This transaction was confirmed on <span className={styles.textHighlight}>{pendingTimeConversion(status.block_time)}.</span> The current value of this transaction
          (amount + fees) is now <span className={styles.textHighlight}>${addCommas(BTCtoDollars + FeestoDollars)}</span>
        </p>
      )}

      <TransactionStatusIcons />

      <section className={`transactionStatusInnerContainer ${styles.transactionStatusInfoContainer}`}>
        <section className={styles.transactionStatusInfo}>
          <div className={styles.statusInfoSection}>
            <h5 className={`detailText ${styles.statusInfoHeader}`}>Amount</h5>
            <p className="detailText">
              <span className={styles.textHighlight}>{BTCAmount}</span> BTC
            </p>
            <p className="detailText">${addCommas(BTCtoDollars)}</p>
          </div>
          <div className={styles.statusInfoSection}>
            <h5 className={`detailText ${styles.statusInfoHeader}`}>Fees</h5>
            <p className="detailText">
              <span className={styles.textHighlight}>{addCommas(fee)}</span> SATS
            </p>
            <p className="detailText">${addCommas(FeestoDollars)}</p>
          </div>
        </section>
        <hr className={styles.divider} />
        <section className={styles.transactionStatusInfo}>
          <div className={styles.statusInfoSection}>
            <h5 className={`detailText ${styles.statusInfoHeader}`}>From</h5>
            <p className="detailText">
              <span className={styles.textHighlight}>{vin.length} inputs</span>
            </p>
          </div>
          <div className={styles.statusInfoSection}>
            <h5 className={`detailText ${styles.statusInfoHeader}`}>To</h5>
            <p className="detailText">
              <span className={styles.textHighlight}>{vout.length} outputs</span>
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default TransactionStatus;
