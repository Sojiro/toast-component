import React from 'react';
import ToastForm from '../ToastForm';
import ToastProvider from '../ToastProvider';

import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <ToastProvider>
        <ToastShelf />
        <ToastForm />
      </ToastProvider>
    </div>
  );
}

export default ToastPlayground;
