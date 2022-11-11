import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MemberCreate from './ui-components/TestMemberCreate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MemberCreate />
    </div>
  )
}

export default App
