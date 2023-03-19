import React from 'react';

export default function useKeydown(keyCode, callback) {
  React.useEffect(() => {
    function handleKeydown(e) {
      if (e.key === keyCode) {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });
}
