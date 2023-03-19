import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (variant, message) => {
    setToasts((toasts) => [
      ...toasts,
      {
        id: crypto.randomUUID(),
        variant,
        message,
      },
    ]);
  };

  const deleteToast = (id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  const dismissAll = () => setToasts([]);

  const value = React.useMemo(
    () => ({ toasts, createToast, deleteToast, dismissAll }),
    [toasts]
  );
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
