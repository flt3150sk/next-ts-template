import { ChangeEvent, useCallback, useState } from 'react';

export const useInput = <T extends HTMLInputElement | HTMLTextAreaElement>(defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState<string>();

  const onChange = useCallback((event: ChangeEvent<T>) => {
    setValue(event.target.value);
  }, []);

  return { value, onChange, error, setError };
};
