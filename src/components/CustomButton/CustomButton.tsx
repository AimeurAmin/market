import { MouseEventHandler, ReactNode } from "react";
import styles from './custom-button.module.scss';

const {container} = styles;

interface CustomButtonProps {
  children?: ReactNode;
  className?: string;
}

const CustomButton = ({className, children}: CustomButtonProps) => {
  return (
    <div className={`${className? className : ''} ${container}`}>{children}</div>
  )
}

export default CustomButton