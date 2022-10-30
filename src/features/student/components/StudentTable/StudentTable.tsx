import Table from "@components/table/Table";
import { asyncGetStudents, asyncRemoveStudent, selectStudents, setEditMode, setLoading } from "@features/student/slices/Students.slice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { useEffect } from "react";
import { RiDeleteBin5Line, RiFileList2Line } from "react-icons/ri";
import { FiEdit3, } from 'react-icons/fi';
import styles from "./student.module.scss";
import getAge from "@utils/getAge";
import { useNavigate } from "react-router";
import { selectToken } from "@features/authentication/slices/auth.slice";

const { userPic, icon, actions, tooltip } = styles;

const StudentTable = () => {

  const students = useAppSelector(selectStudents);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const removeStudent = (id: string) => {
    dispatch(asyncRemoveStudent(id));
  }

  const openStudentDetails = (studentId: string) => {
    dispatch(setEditMode(false))
    navigate(`/students/${studentId}`)
  }

  const editStudentDetails = (studentId: string) => {
    dispatch(setEditMode(true));
    navigate(`/students/${studentId}`)
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Sexe</th>
          <th>TéléphoneNumber</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id} onClick={() =>openStudentDetails(student.id)}>
            <td>{student.id}</td>
            <td>
              <img src={student.photo} alt="" className={userPic} />
            </td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.sex}</td>
            <td>{student.phoneNumber}</td>
            <td>{getAge(student.birthdate)}</td>
            <td onClick={(e) => {e.stopPropagation();}}>
              <div className={actions}>
                <div className={icon}>
                  <RiFileList2Line
                    color="#208f20"
                    size={20}
                    style={{ marginInlineEnd: 10, cursor: "pointer" }}
                    onClick={() => navigate(`/students/${student.id}`)}
                  />
                  <p className={tooltip}>Détail</p>
                </div>
                <div className={icon}>
                  <FiEdit3
                    color="#DC6F40"
                    size={20}
                    style={{ marginInlineEnd: 10, cursor: "pointer" }}
                    onClick={() => editStudentDetails(student.id)}
                  />
                  <p className={tooltip}>Éditer</p>
                </div>
                <div className={icon}>
                  <RiDeleteBin5Line
                    color="#FF4337"
                    size={20}
                    style={{ cursor: "pointer" }}
                    onClick={() => removeStudent(student.id)}
                  />
                  <p className={tooltip}>Supprimer</p>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StudentTable;
