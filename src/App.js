
import { useState } from 'react';
import Values from 'values.js';
import './App.css';
import SingleColor from './SingleColor';

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#FF7777').all(10))

  const onSubmit = (e) =>{
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
    }
  }
  return (
    <>
     <section className='container'>
       <h3>Color Generator</h3>
       <form onSubmit={onSubmit}>
         <input type='text' placeholder='#FF7777' value={color} onChange={(e) => setColor(e.target.value)}
          className={`${error ? 'error' : null}`} />
         <button type='submit' className='btn'>Get Colors</button>
       </form>
     </section>
     <section className='colors'>
       {list.map((color, index) =>{
         return (
           <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
         )
       })}
     </section>
    </>
  );
}

export default App;
