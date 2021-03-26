import React, { useEffect, useRef } from 'react';

export const useClickOutside = (callback: () => void): [React.MutableRefObject<any>, React.MutableRefObject<any>] => {
  const targetRef = useRef<any>(null);
  const buttonRef = useRef<any>(null);

  useEffect(() => {
    const handleOutside = (event: Event) => {
      if (
        targetRef.current &&
        buttonRef.current &&
        !targetRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        callback();
      }
    };

    document.addEventListener('click', handleOutside);
    return () => {
      document.removeEventListener('click', handleOutside);
    };
  }, [callback]);

  return [targetRef, buttonRef];
};
