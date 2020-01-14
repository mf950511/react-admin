import * as React from 'react'
import { Button } from 'antd'
const { useState } = React

function Login(){
  console.log([1,2,3].includes(1))
  const [count, setCount] = useState<number>(0)
  return (
    <div className="qwe">
      <Button type="primary">Button</Button>
      <p>you clicked { count } times</p>
      <button onClick={() => setCount(count + 1)}> click me</button>
    </div>
  )
}

export default Login