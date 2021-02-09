import React, { useState } from 'react'

type InputProps = {
  label: string,
  placeholder?: string
}

export const Input = ({ label, placeholder, ...props}: InputProps) => {
  const [value, setValue] = useState<string>('');
  return (
    <label htmlFor="input">
      <p>{label}</p>
      <input id="input" type="text" value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} />
    </label>
  );
}
