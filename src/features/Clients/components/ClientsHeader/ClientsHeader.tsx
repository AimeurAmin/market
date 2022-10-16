import Button from '@components/Button/Button';
import CustomButton from '@components/CustomButton/CustomButton';
import CustomInput from '@components/CustomInput/CustomInput';
import { AiOutlineBarcode } from 'react-icons/ai';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { MdSearch } from 'react-icons/md';
import styles from './clients-header.module.scss';

const  { container, title, button, actionsContainer, inputContainer } = styles;

const ClientsHeader = () => {
  return (
    <div className={container}>
      <div className={title}>Liste des clients</div>
      <div className={actionsContainer}>
        <CustomButton className={button}>
          <BsFillPersonPlusFill />
          <button>Ajouter un client</button>
        </CustomButton>

        <CustomInput className={inputContainer}>
          <input placeholder='Filtrer les clients par nom / prénom'/>
          <MdSearch size={25}/>
        </CustomInput>

         
      <CustomInput className={inputContainer}>
        <input placeholder='Rechercher par code produit'/>
        <AiOutlineBarcode size={25} />
        {/* <AiOutlineBarcode size={25}/> */}
      </CustomInput>
      </div>
    </div>
  )
}

export default ClientsHeader