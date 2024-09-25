import React from 'react';
import styles from './styles.css';
import { useSelector } from 'react-redux';

const Error = () => {
    const { error } = useSelector((state) => state.transactionData);

    console.log(error);
    return (
        <section className={'altStatesContainer'}>
            <h2 className={'errorText'}>Error: {error} </h2>
        </section>
    )
}



export default Error;