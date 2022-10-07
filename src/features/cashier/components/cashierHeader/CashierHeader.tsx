import Button from '@components/Button/Button';
import CustomInput from '@components/CustomInput/CustomInput';
import Input from '@components/Input/Input';
import React from 'react'
import styles from './cashier-header.module.scss';
import { MdSearch } from "react-icons/md";
import { AiOutlineBarcode } from "react-icons/ai"
const { container, buttonStyle, inputContainer } = styles;

const CashierHeader = () => {

  const addProductHandler = () => {
    alert('add Product')
  }
  return (
    <div className={container}>
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