import React from 'react';
import './App.css';

function Input({ value, setValue }) {

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}

function Form() {

  const [value, setValue] = React.useState('');

  function handleSubmit(evt) {
    evt.preventDefault()
    alert(value)
  }

  function handleReset() {
    setValue('');
  }

  return (
    <form name='a-form' onSubmit={handleSubmit}>
      <Input value={value} setValue={setValue} />
      <button type='submit'>Submit</button>
      <button type='button' onClick={handleReset}>Reset</button>
    </form>
  )
}

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
