import React from 'react'

const ScrollToTop = ({scrollUp}) => {

  return (
    <button onClick={scrollUp} className='scroll'>Scroll to top</button>
  )
}

export default ScrollToTop