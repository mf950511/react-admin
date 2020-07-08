import * as React from 'react'
const { useState, useEffect } = React
import TweenOne from 'rc-tween-one'
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
TweenOne.plugins.push(Children);

interface NumberProps{
  number: number;
  className?: string;
  duration?: number;
  formatMoney?: boolean;
  [PropName: string]: any
}

const NumberAnimation = (props: NumberProps) => {
  const { number = 0, className = '', formatMoney = true, duration = 1000 } = props
  const initAnimation: any = null
  const [animation, setAnimation] = useState(initAnimation)

  useEffect(() => {
    setAnimation({
      Children: { 
        value: typeof number === 'number' ? number : 0,
        floatLength: 2,
        formatMoney, 
      }, 
      duration
    })
  }, [number])

  return (
    <TweenOne
      animation={animation}
      className={className}
    >
      0
    </TweenOne>
  )
}

export default NumberAnimation