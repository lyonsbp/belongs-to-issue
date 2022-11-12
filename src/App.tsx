import { useState } from 'react'
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
