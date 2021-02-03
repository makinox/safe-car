import { useState } from 'react';

export function useInputValue({ initialValue = '', type = 'text' }: { initialValue?: string; type?: string }) {
  const [value, setValue] = useState(initialValue);

  function onChange(e: any) {
    setValue(e.target.value);
  }

  return { value, onChange, type };
}
