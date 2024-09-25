import React from 'react';
import styles from './styles.css';
import { useSelector } from 'react-redux';

const Error = () => {
    const { error } = useSelector((state) => state.transactionData);

    console.log(error);
    return (
        <section className={'altStatesContainer'}>
            <h3 className={'errorText'}>Error: {error} </h3>
        </section>
    )
}



export default Error;