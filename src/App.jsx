import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        <form>
          <input type='text' placeholder='Enter pokemon name' /><br />
          <button type='submit'>ADD POKEMON</button>
        </form>
      </div>
  )
}

export default App
