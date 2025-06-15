// const users = [
//     {name : "Alice", age : 25},
//     {name : "Bob", age : 30},
//     {name : "Charlie", age : 35},
//     {name : "Angles", age : 40},
// ]

import { useState } from "react"


export const DerivedState = () => {
    const [users] = useState([
        {name : "Alice", age : 25},
        {name : "Bob", age : 30},
        {name : "Charlie", age : 35},
        {name : "Angles", age : 40},
    ])

    //?Derived State for finding count of users
    const totalUsers = users.length;
    //!here total users is dependent on state variable so totalUsers, sumAge our derivedState

    //?Derived State for finding avg age of users
    const sumAge = users.reduce((acc, user) => {
        return acc += user.age;
    }, 0)

    const avgAge = sumAge / totalUsers;
    

    return (
        <div className="main-div">
            <h1>Users list</h1>
            <ul>
                {users.map(({name, age}, index) => {
                    return (
                        <li key={index}>
                            {name} - {age} years old
                        </li>
                    )
                })}
            </ul>
            <h2>Total Users : {totalUsers}</h2>
            <h2>Average age of users : {avgAge.toFixed(0)}</h2>
        </div>
    )
}