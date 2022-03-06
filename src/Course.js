import React from "react";
import Content from './Content'


const Course = ({courses}) => {
    console.log(courses)
    return (
        <div>
            {
                courses.map(course =>{
                    return(
                        <div>
                        <h1>{course.name}</h1>
                        <Content parts={course.parts}/>
                        </div>
                    )
                })
            }
        </div>
    ) 
}

export default Course