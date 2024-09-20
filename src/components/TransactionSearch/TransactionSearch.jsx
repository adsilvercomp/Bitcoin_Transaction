import React from 'react';
import styles from './styles.css';
const TransactionSearch  = () => {
    return (
        <section className="transactionSearchContainer">
            <div className="transactionSearchInnerContainer">
                <label className="transactionSearchLabel" for="Transaction ID">Transaction ID</label>
                <input className="transactionSearchInput" type="text" ></input>
            </div>
            <button className="searchButton">Search</button>
        </section>
    )
}

export default TransactionSearch;