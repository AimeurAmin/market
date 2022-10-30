import React from 'react'
import styles from './loading.module.scss';

const { container, layer, text } = styles;
const Loading = () => {
  return (
    <div className={container}>
      <div className={layer}></div>
      <div className={text}>Loading...</div>
    </div>
  )
}

export default Loading