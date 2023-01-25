import Student from "./Student";

const StudentList = ({studentList}) => {
  return ( (

    <div>
    {studentList.map(student =>
        <Student student={student} key={student.name} />
        )}
    </div>

  ) );
}
 
export default StudentList;