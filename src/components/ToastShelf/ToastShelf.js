import React from 'react';

import Toast from '../Toast';
import useEscapeKey from '../../hooks/useEscapeKey';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, dismissAll, deleteToast } = React.useContext(ToastContext);

  useEscapeKey(dismissAll);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            handleDismiss={() => deleteToast(toast.id)}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
