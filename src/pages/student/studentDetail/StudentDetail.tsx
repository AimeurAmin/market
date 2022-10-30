import StudentDetails from '@features/student/components/StudentDetails/Details/StudentDetails';
import StudentPayments from '@features/student/components/StudentDetails/Payments/StudentPayments';
import StudentSlots from '@features/student/components/StudentDetails/Slots/StudentSlots';
import MainLayout from '@layouts/main-layout/MainLayout';
import { useEffect, useState } from 'react';
import styles from './student-detail.module.scss';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { asyncGetStudent, selectCurrentStudent, selectEditMode, selectStudentsLoadingState, setEditMode } from '@features/student/slices/Students.slice';
import Loading from '@components/Loading/Loading';
import { useParams } from 'react-router';
import CustomButton from '@components/CustomButton/CustomButton';
import { selectToken } from '@features/authentication/slices/auth.slice';

const { container, headerContainer, menu, actions, item, selected, notSelected, content } = styles;

const StudentDetail = () => {
  const [isSelected, setIsSelected] = useState(0);
  const loading = useAppSelector(selectStudentsLoadingState);
  const dispatch = useAppDispatch();
  const params = useParams();
  const editMode = useAppSelector(selectEditMode);
  const token = useAppSelector(selectToken);

  useEffect(() => {
    if(token) {
      dispatch(asyncGetStudent({id: params.studentId || ''}))
    }

    return () => {
      setEditMode(false)
    }
  }, [token])
  
  const selectTab = (id: number) => {
    setIsSelected(id);
  }
  
  return (
    <div className={container}>
      {loading && <Loading />}
      <div className={`${headerContainer}`}>

        <div className={menu}>
          <div className={`${item} ${isSelected === 0 ? selected : notSelected}`} onClick={() => selectTab(0)}>Détails</div>
          <div className={`${item} ${isSelected === 1 ? selected : notSelected}`} onClick={() => selectTab(1)}>Créneaux</div>
          <div className={`${item} ${isSelected === 2 ? selected : notSelected}`} onClick={() => selectTab(2)}>Paiements</div>
        </div>
        <div className={actions}>
          {editMode ? (
            <button onClick={() => dispatch(setEditMode(false))}>Sauvegarder</button>
            ) : (
            <button onClick={() => dispatch(setEditMode(true))}>Editer</button>
          )}
          {editMode ? (
            <button onClick={() => dispatch(setEditMode(false))}>Annuler</button>
            ) : (
            <button onClick={() => alert('deleting student')}>Supprimer</button>
          )}
        </div>
      </div>
      <div className={content}>
        {isSelected === 0 && <StudentDetails />}
        {isSelected === 1 && <StudentSlots />}
        {isSelected === 2 && <StudentPayments />}
      </div>
    </div>
  )
}

export default MainLayout(StudentDetail)