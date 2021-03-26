import React, { useState } from 'react';

export const useInput = (initValue: string): [string, React.ChangeEventHandler<HTMLInputElement>] => {
  const [input, setInput] = useState(initValue);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = event => {
    const { value } = event.target;
    setInput(value);
  };

  return [input, handleInput];
};
