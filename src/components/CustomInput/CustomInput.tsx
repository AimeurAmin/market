import React, { ReactNode } from 'react'
import styles from './custom-input.module.scss';

const { container } = styles;

type CustomInputProps = {
    className?: string;
    children?: ReactNode;
}

const CustomInput = ({ className, children }: CustomInputProps ) => {
  return (
    <div className={`${className? className : ''} ${container}`}>{children}</div>
  )
}

export default CustomInput