import Button from '@components/Button/Button';
import CustomInput from '@components/CustomInput/CustomInput';
import { useState } from 'react'
import styles from './cashier-header.module.scss';
import { MdSearch } from "react-icons/md";
import { AiOutlineBarcode } from "react-icons/ai"
import Modal from '@components/Modal/Modal';
const { container, buttonStyle, inputContainer, svgStyle } = styles;

const CashierHeader = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const addProductHandler = () => {
    setModalIsOpen(prev => !prev);
  }
  return (
    <div className={container}>
      <Button text='Ajouter un produit' onClick={addProductHandler} className={buttonStyle}/>
      <Modal isOpen={modalIsOpen} close={() => setModalIsOpen(false)}>
        <div style={{width: 600, height: 400, background: "#FFF"}}>
          <div style={{color: "#000", display: "flex",height: "100%", justifyContent: "center", alignItems: "center"}}>Hello</div>
        </div>
      </Modal>
      
      <CustomInput className={inputContainer}>
        <input placeholder='Filtrer les produits par réference'/>
        <MdSearch size={25}/>
      </CustomInput>
      
      <CustomInput className={inputContainer}>
        <input placeholder='Rechercher par code produit'/>
        <AiOutlineBarcode size={25} className={svgStyle}/>
        {/* <AiOutlineBarcode size={25}/> */}
      </CustomInput>
    </div>
  )
}

export default CashierHeader