import { useState } from "react";

// import { dataList } from "./data/data";
import Score from "./Score";

// import 
// import { studentList } from "./data/data";

const Student = ({student}) => {
  const [currentStudent, setCurrentStudent] = useState(student)
  return ( 
    <div>
      <h1>{currentStudent.name}</h1>
      <p><Score scores={currentStudent.scores} /></p>
    </div>

   );
}
 
export default Student;