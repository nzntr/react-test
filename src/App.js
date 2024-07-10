import React, { useState } from 'react';
import './App.css';

const courses = {
  "Operating System": ["202001", "202002", "202003"],
  "Data Structure": ["202004", "202005", "202006"],
  "Theory of Computation": ["202007", "202008", "202009"],
};

function App() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [studentIndex, setStudentIndex] = useState(0);
  const [attendanceTaken, setAttendanceTaken] = useState(false);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
    setStudentIndex(0);
    setAttendanceTaken(false);
  };

  const handleAttendance = () => {
    if (studentIndex < courses[selectedCourse].length - 1) {
      setStudentIndex(studentIndex + 1);
    } else {
      setAttendanceTaken(true);
    }
  };

  return (
    <div className="App">
      <h1>Attendance App</h1>
      <select onChange={handleCourseChange} value={selectedCourse}>
        <option value="">Select a course</option>
        {Object.keys(courses).map(course => (
          <option key={course} value={course}>{course}</option>
        ))}
      </select>
      {selectedCourse && !attendanceTaken && (
        <div>
          <h2>Course: {selectedCourse}</h2>
          <div className="attendance-section">
          <p>{courses[selectedCourse][studentIndex]}</p>
          <button onClick={handleAttendance}>Present</button>
          <button onClick={handleAttendance}>Absent</button>
          </div>
        </div>
      )}
      {attendanceTaken && <p className="done-message">Attendance taken</p>}
    </div>
  );
}

export default App;
