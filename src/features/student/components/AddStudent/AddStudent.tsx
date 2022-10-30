import CustomInput from '@components/CustomInput/CustomInput';
import styles from './add-student.module.scss';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import CustomButton from '@components/CustomButton/CustomButton';
const { container, line, input, inputContainer, title, closeIcon, button, cancelButton, addAndNewButton, addButton } = styles;

const AddStudent = ({closeModal}: any) => {
  return (
    <div className={container}>
      <AiOutlineCloseCircle className={closeIcon} onClick={closeModal}/>

      <div className={title}>
        Ajouter un nouveau étudiant
      </div>

      <div className={line}>
        <div className={inputContainer}>
          <label htmlFor="firstName">Prénom</label>
          <CustomInput className={input}>
            <input id='firstName' placeholder="Insérer le prénom de l'étudient"/>
          </CustomInput>
        </div>
        <div className={inputContainer}>
          <label htmlFor="lastName">Nom</label>
          <CustomInput className={input}>
            <input id='lastName' placeholder="Insérer le nom de l'étudient"/>
          </CustomInput>
        </div>
      </div>

      <div className={line}>
        <div className={inputContainer}>
          <label htmlFor="birthdate">Date naissance</label>
          <CustomInput className={input}>
            <input type='date' placeholder="séléctionner la date de naissance"/>
          </CustomInput>
        </div>
        <div className={inputContainer}>
          <label htmlFor="sexe">Sexe</label>
          <CustomInput className={input}>
            <select>
              <option value="1">Masculin</option>
              <option value="2">Féminin</option>
            </select>
          </CustomInput>
        </div>
      </div>
      
      <div className={line}>
        <div className={inputContainer}>
          <label htmlFor="e-mail">E-mail</label>
          <CustomInput className={input}>
            <input id='e-mail' placeholder="e-mail de l'étudient"/>
          </CustomInput>
        </div>
        <div className={inputContainer}>
          <label htmlFor="phoneNumber">TéléphoneNumber</label>
          <CustomInput className={input}>
            <input id='phoneNumber' placeholder="Insérer le numéro de l'étudient"/>
          </CustomInput>
        </div>
      </div>

      <div className={line}>
      <div className={inputContainer}>
        <label htmlFor="address">Adresse</label>
        <CustomInput className={input}>
          <textarea id='address' placeholder="Insérer l'addresse de l'étudient" rows={2} cols={69}/>
        </CustomInput>
      </div>
      </div>
     
      <div className={line}>
        <CustomButton className={`${button} ${cancelButton}`}>
          <button onClick={closeModal}>Annuler</button>
        </CustomButton>
        <CustomButton className={`${button} ${addAndNewButton}`}>
          <button>Ajouter et nouveau</button>
        </CustomButton>
        <CustomButton className={`${button} ${addButton}`}>
          <button>Ajouter</button>
        </CustomButton>
      </div>
    </div>
  )
}

export default AddStudent