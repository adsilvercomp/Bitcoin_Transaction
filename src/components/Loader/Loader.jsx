import React from 'react';
import loader from '../../icons/loader.gif';
import styles from './styles.css';

const Loader = () => {
    return (
        <section className={'altStatesContainer'}>
            <img className={'loadingSpinner'} src={loader}/>
        </section>
    )
}

export default Loader;