import { useEffect, useRef } from 'react';

export const useClickOutside = (callback: Function) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleOutside);
    return () => {
      document.removeEventListener('click', handleOutside);
    };
  }, [callback]);

  return ref;
};
