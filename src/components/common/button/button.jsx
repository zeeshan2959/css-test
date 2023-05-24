import React from 'react'

const Button = ({text,classes,onclick}) => {
  return (
    <button onClick={onclick} className={classes}>{text}</button>
  )
}

export default Button