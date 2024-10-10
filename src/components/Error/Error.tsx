import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { RootState } from "../../redux/store";

const Error = () => {
    const { error } = useSelector((state:RootState) => state.transactionData);

    return (
        <section className={'altStatesContainer'}>
            <h3 className={styles.errorText}>Error: {error} </h3>
        </section>
    )
}



export default Error;