import React from 'react';
import styles from './ToastForm.module.css';
import Button from '../Button';
import { ToastContext } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastForm() {
  const { createToast } = React.useContext(ToastContext);

  const [toast, setToast] = React.useState({
    variant: VARIANT_OPTIONS[0],
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createToast(toast.variant, toast.message);
  };

  const updateVariant = (variant) => {
    setToast((toast) => ({ ...toast, variant }));
  };

  const updateMessage = (message) => {
    setToast((toast) => ({ ...toast, message }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor='message'
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              value={toast.message}
              className={styles.messageInput}
              onChange={(e) => updateMessage(e.target.value)}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => (
              <label key={variant} htmlFor={`variant-${variant}`}>
                <input
                  id={`variant-${variant}`}
                  type='radio'
                  name='variant'
                  value={variant}
                  checked={variant === toast.variant}
                  onChange={(e) => updateVariant(e.target.value)}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastForm;
