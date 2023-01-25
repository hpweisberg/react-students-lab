import { useState } from 'react';
import './App.css';
import { dataList } from './data/data';
import StudentList from './StudentList';


function App() {
  const [studentList, setStudentList] = useState(dataList)
  
  console.log(studentList)  
  return (
    <div>
      < StudentList studentList={studentList} />
    </div>
  );
}

export default App;
