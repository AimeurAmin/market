import CustomButton from '@components/CustomButton/CustomButton';
import CustomInput from '@components/CustomInput/CustomInput';
import styles from './student-header.module.scss';
import { MdSearch } from 'react-icons/md';
import Modal from '@components/Modal/Modal';
import { useState } from 'react';
import AddStudent from '@features/student/components/AddStudent/AddStudent';

const { container, button, inputContainer } = styles;

const StudentHeader = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className={container}>
      <Modal isOpen={modalIsOpen} >
        <AddStudent closeModal={() => setModalIsOpen(false)}/>
      </Modal>

      <CustomInput className={inputContainer}>
        <input placeholder='Filtrer les clients par nom / prénom'/>
        <MdSearch size={25}/>
      </CustomInput>


      <CustomButton className={button}>
        <button onClick={() => setModalIsOpen(true)}>Ajouter un étudient</button>
      </CustomButton>
    </div>
  )
}

export default StudentHeader