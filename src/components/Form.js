import React from 'react';

import Input from './Input';

function Form() {
  return (
    <form>
      <Input />
    </form>
  );
}

export default Form;

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
//     <form onSubmit={handleSubmit}>
//       <Input value={value} setValue={setValue} />
//       <button type='submit'>Submit</button>
//       <button type='button' onClick={handleReset}>Reset</button>
//     </form>
//   )
// }
