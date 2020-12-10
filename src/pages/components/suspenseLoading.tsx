import * as React from 'react'


const SuspenseLoading = () => {
  return (
    <div className="loader">
      <div className="loader-inner">
        {
          [1,2,3,4, 5].map(item => (
            <div className="loader-line-wrap" key={ item }>
              <div className="loader-line"></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SuspenseLoading