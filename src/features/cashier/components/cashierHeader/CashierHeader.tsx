import Button from '@components/Button/Button';
import CustomInput from '@components/CustomInput/CustomInput';
import { useState } from 'react'
import styles from './cashier-header.module.scss';
import { MdSearch } from "react-icons/md";
import { AiOutlineBarcode } from "react-icons/ai"
import Modal from '@components/Modal/Modal';
const { container, buttonStyle, inputContainer } = styles;

const CashierHeader = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const addProductHandler = () => {
    setModalIsOpen(prev => !prev);
  }
  return (
    <div className={container}>
      <Modal isOpen={modalIsOpen} close={() => setModalIsOpen(false)}>
        <p>Hello</p>
      </Modal>
      <Button text='Ajouter un produit' onClick={addProductHandler} className={buttonStyle}/>
      
      <CustomInput className={inputContainer}>
        <input placeholder='Filtrer les produits par réference'/>
        <MdSearch size={25} className='suffixIcon'/>
      </CustomInput>

      <CustomInput className={inputContainer}>
        <input placeholder='Rechercher par code produit'/>
        <AiOutlineBarcode size={25} className='suffixIcon'/>
      </CustomInput>
    </div>
  )
}

export default CashierHeader