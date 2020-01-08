import * as React from 'react'
const { useState } = React
function Example(){
  const [count, setCount] = useState<number>(0)
  return (
    <div>
      我是错误页面
    </div>
  )
}

export default Example