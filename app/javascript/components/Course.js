import React from 'react';
const Course = ({ course }) => {
  const { name, id } = course
  return (
    <>
      <h1>{name}</h1>
      <hr/>
      <a href={`/courses/${id}/enrollments`}>Enrollments</a>
    </>
  )
}
export default Course;