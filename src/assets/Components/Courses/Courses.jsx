import { useState } from "react";
import { useEffect } from "react";
import Course from "../Course/Course";


const Courses = ({handleSelect}) => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
    fetch('course_reg.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[])
  

    return (
        <div className='w-3/4 grid grid-cols-3 gap-5'>
            {
              courses.map(course=><Course key={courses.idx} handleSelect={handleSelect} course={course}></Course>)
              
            }
            
        </div>
    );
  }
export default Courses;