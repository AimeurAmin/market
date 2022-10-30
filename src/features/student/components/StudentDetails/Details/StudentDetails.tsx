import Modal from '@components/Modal/Modal';
import { selectCurrentStudent, selectEditMode } from '@features/student/slices/Students.slice';
import getAge from '@utils/getAge';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../../app/hooks';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import styles from './student-details.module.scss';

const { container, modalContent, bigPic, picAndFullName, infosContainer, line, infoWrapper, label, info } = styles;

const StudentDetails = () => {
  const student = useAppSelector(selectCurrentStudent);
  const editMode = useAppSelector(selectEditMode);

  const [isOpenPic, setIsOpenPic] = useState(false)
  
  const formatbirthdate = (birthdate: string | undefined) => {
    if(!birthdate) return ''
    const date = new Date(birthdate)
    return `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`
  }
  
  const formatbirthdateForInput = (birthdate: string | undefined) => {
    if(!birthdate) return ''
    const date = new Date(birthdate)
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  }

  const [birthdate, setbirthdate] = useState(formatbirthdateForInput(student?.birthdate))
  
  useEffect(() => {
    setbirthdate(formatbirthdateForInput(student?.birthdate))
  }, [student])
  

  if(!student) return (<div>...</div>);

  return (
    <div className={container}>
      <Modal isOpen={isOpenPic} close={() => setIsOpenPic(false)}>
          <div className={modalContent}>
            <AiOutlineCloseCircle onClick={() => setIsOpenPic(false)}/>
            <img className={bigPic} src={student?.photo} alt={`${student.firstName} ${student.lastName}`} />
          </div>
      </Modal>
      <div className={picAndFullName}>
        <img src={student?.photo} alt="" onClick={() => setIsOpenPic(true)}/>
        <h2>{student?.firstName} &nbsp; {student?.lastName}</h2>
      </div>
      <div className={infosContainer}>

        <div className={line}>
          <div className={infoWrapper}>
            <div className={label}>Prénom</div>
            {editMode ? (
              <input type="text"  placeholder={student.firstName}/>
              ):(
              <div className={info}>{student?.firstName}</div>
            )}
          </div>
          <div className={infoWrapper}>
            <div className={label}>Nom</div>
            {editMode ? (
              <input type="text" placeholder={student.lastName}/>
              ):(
              <div className={info}>{student?.lastName}</div>
            )}
          </div>
        </div> 

        <div className={line}>
          <div className={infoWrapper}>
            <div className={label}>Date de naissaince</div>
            {editMode ? (
              <input type="date" value={birthdate} onChange={e => setbirthdate(e.target.value)}/>
              ):(
              <div className={info}>{formatbirthdate(student?.birthdate)}</div>
            )}
          </div>
          <div className={infoWrapper}>
            <div className={label}>Age</div>
            <div className={info}>{getAge(student?.birthdate)}</div>
          </div>
        </div> 
        <div className={line}>
          <div className={infoWrapper}>
            <div className={label}>Sexe</div>
            <div className={info}>{student?.sex}</div>
          </div>
        </div>
        <div className={line}>
          <div className={infoWrapper}>
            <div className={label}>Adresse E-mail</div>
            <div className={info}>{student.email}</div>
          </div>
        </div>

        <div className={line}>
          <div className={infoWrapper}>
            <div className={label}>Numéro de téléphoneNumber</div>
            <div className={info}>{student.phoneNumber}</div>
          </div>
        </div>

        <div className={line}>
          <div className={infoWrapper}>
            <div className={label}>Adresse</div>
            <div className={info}>{`${student?.address?.city} - ${student.address?.street}, ${student.address?.houseDoor} - ${student.address?.zipcode}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails