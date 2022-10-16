import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

const { container, overlay, content } = styles;

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  close?: Function;
}

const Modal = ({children, isOpen, close}: ModalProps) => {
  const portalDiv = document.getElementById('modal')!;

  if(!isOpen) {
    return null;
  }
  
  return createPortal(
    <div className={container}>
      <div className={overlay} onMouseUp={() => close? close() : undefined}></div>
      <div className={content}>{children}</div>
    </div>,
    portalDiv
  )
}

export default Modal;