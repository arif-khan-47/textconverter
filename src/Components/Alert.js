import React from 'react'

function Alert(props){
  return (
    props.alert && <div className='bg-blue-400 border-blue-700 border p-5 font-semibold text-xl text-white' role="alert">
    {props.alert.msg}
  </div>
  )
}

export default Alert
