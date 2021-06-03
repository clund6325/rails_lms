import React from 'react';

const Courses = ({courses}) => {
  return(
    <>
      <h1>Courses</h1>
      <a href="/courses/new">New Course</a>
      <br />
      <h2>{ courses.lenght <= 0 ? "No Courses" : "" }</h2>
      {
        courses.map( ( course) => (
          <div>
            <a href={`/courses/${course.id}`}>{course.name}</a>
          </div>
        ))
      }
    </>
  )
}

export default Courses