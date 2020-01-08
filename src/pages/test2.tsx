import * as React from 'react'
const { useState } = React
function Example(){
  const [count, setCount] = useState<number>(0)
  return (
    <div>
      <p>you clicked123231 { count } times</p>
      <button onClick={() => setCount(count + 1)}> 点我哦</button>
    </div>
  )
}

export default Example