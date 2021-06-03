import React from 'react';
const CourseNew = ({ course }) => {
  const { name, errors } = course
  const defaultName = name ? name : ""
  return(
    <>
      <h1>Add course</h1>
      { errors && errors }
      <form action='/courses' method="post">
        <input
          type='text'
          required
          placeholder="Name"
          defaultValue={defaultName}
          name="course[name]"
        />
        <button type='submit'>Add</button>
      </form>
    </>
  )
}
export default CourseNew;