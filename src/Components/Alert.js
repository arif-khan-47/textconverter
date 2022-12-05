import React from 'react'

function Alert(props){
  return (
    props.alert && <div className='alert alert-info alert-dismissible fade show' role="alert">
    {props.alert.msg}
  </div>
  )
}

export default Alert
