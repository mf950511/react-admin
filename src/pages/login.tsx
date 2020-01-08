import * as React from 'react'
const { useState } = React
function Login(){
  const [count, setCount] = useState<number>(0)
  return (
    <div>
      <p>you clicked { count } times</p>
      <button onClick={() => setCount(count + 1)}> click me</button>
    </div>
  )
}

export default Login