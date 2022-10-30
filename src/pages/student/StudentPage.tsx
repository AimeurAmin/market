import MainLayout from '@layouts/main-layout/MainLayout'
import styles from './student.module.scss'
import StudentTable from '@features/student/components/StudentTable/StudentTable';
import StudentHeader from '@features/student/components/StudentHeader/StudentHeader';
import Paginator from '@components/paginator/Paginator';
import { useAppSelector } from '../../app/hooks';
import { selectStudentsLoadingState } from '@features/student/slices/Students.slice';
import Loading from '@components/Loading/Loading';

const {container} = styles;

const StudentPage = () => {
  const loading = useAppSelector(selectStudentsLoadingState)
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