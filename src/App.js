import React from 'react';
import './App.css';

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
function App() {
  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;

// function Form() {

//   const [value, setValue] = React.useState('');

//   function handleSubmit(evt) {
//     evt.preventDefault()
//     alert(value)
//   }

//   function handleReset() {
//     setValue('');
//   }

//   return (
//     <form name='a-form' onSubmit={handleSubmit}>
//       <Input value={value} setValue={setValue} />
//       <button type='submit'>Submit</button>
//       <button type='button' onClick={handleReset}>Reset</button>
//     </form>
//   )
// }
