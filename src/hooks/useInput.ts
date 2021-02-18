import { useState } from 'react';

export const useInput = (initValue: string): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [input, setInput] = useState(initValue);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
  };

  return [input, handleInput];
};
