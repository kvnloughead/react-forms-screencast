import React from 'react';

function Input() {
  const [value, setValue] = React.useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleDisplay() {
    alert(value);
  }

  function handleReset() {
    setValue('');
  }

  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleDisplay}>Display</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default Input;