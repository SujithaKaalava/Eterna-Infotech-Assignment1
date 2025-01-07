import { useState } from 'react'
import SignInPage from './components/SignInPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <SignInPage/>
        </div>
    </>
  )
}

export default App
