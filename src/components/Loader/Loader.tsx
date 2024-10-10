import React from 'react';
import loader from '../../icons/loader.gif';
import styles from './styles.module.css';

const Loader = () => {
  return (
    <section className={'altStatesContainer'}>
      <img className={styles.loadingSpinner} src={loader} />
    </section>
  );
};

export default Loader;
