import React from 'react';

export default function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeydown(e) {
      if (e.key === 'Escape') {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });
}
