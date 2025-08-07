import React from 'react'

const Light = ({color, active}) => {
  return (
    <div className='light' style={{backgroundColor: active ? color : "grey"}} />
  )
}

export default Light