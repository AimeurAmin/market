import MainLayout from '@layouts/main-layout/MainLayout'
import styles from './student.module.scss'
import StudentTable from '@features/student/components/StudentTable/StudentTable';
import StudentHeader from '@features/student/components/StudentHeader/StudentHeader';
import Paginator from '@components/paginator/Paginator';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { asyncGetStudents, selectStudentsLoadingState } from '@features/student/slices/Students.slice';
import Loading from '@components/Loading/Loading';
import { useEffect } from 'react';
import { selectToken } from '@features/authentication/slices/auth.slice';

const {container} = styles;

const StudentPage = () => {
  const loading = useAppSelector(selectStudentsLoadingState)
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('here..');    
    dispatch(asyncGetStudents());
  }, [dispatch]);
  

  return (
    <div className={container}>
      {loading && <Loading />}
      
      <StudentHeader />
      <StudentTable />
      <Paginator pagesNumber={10} selectedPage={1}/>
    </div>
  )
}

export default  MainLayout(StudentPage);