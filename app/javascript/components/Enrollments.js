import React from 'react';
const Enrollments = ({ course, tas, teachers, students, users }) => {
  const displayUser = (id) => {
    let fullName 
    users.map( (u) => {
      if (u.id === id) {
        fullName = u.first_name + " " + u.last_name
      }
    })
    return fullName
  }
  return (
    <>
      <h1>{course.name}'s Enrollments</h1>
      <a href={`/courses/${course.id}/enrollments/new`}>Add enrollment</a>
      <br />
      <h2>Teachers</h2>
      { teachers.map( (t) => (
        <div>
          <p>{displayUser(t.user_id)}</p>
          <a href={`/courses/${course.id}/enrollments/${t.id}`} data-method='delete'>Delete</a>
        </div>
      ))}
      <h2>Tas</h2>
      { tas.map( (ta) => (
        <div>
          <p>{displayUser(ta.user_id)}</p>
          <a href={`/courses/${course.id}/enrollments/${ta.id}`} data-method='delete'>Delete</a>
        </div>
      ))}
      <h2>Students</h2>
      { students.map( (s) => (
        <div>
          <p>{displayUser(s.user_id)}</p>
          <a href={`/courses/${course.id}/enrollments/${s.id}`} data-method='delete'>Delete</a>
        </div>
      ))}
    </>
  )
}
export default Enrollments;