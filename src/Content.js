
// import { useState } from "react"



const Content = ({parts}) => {

    const totalYears = parts.reduce((acc, part) => acc + part.exercises, 0);
    // console.log(parts)
    return (
        <div>
            {parts.map(part => {
                return (
                    <div key={part.names}>
                        <ul>{part.name} {part.exercises}</ul>
                    </div>
                )
            }

        )}
            <h3>Total number of exercises {totalYears}</h3>

        </div>
    )
}

export default Content