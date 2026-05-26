import React, { useContext } from 'react'
import { EmployeeContext } from '../../no0_context/EmployeeContext'

const EmployeeTable = () => {
    const {state} = useContext(EmployeeContext)
    const {emp} = state;

    return (
    <> 
        <table>

            <tr>
                {emp && Object.keys(emp).map(key=>(
                    <th>{key}</th>
                ))}
            </tr>
            <tr>
                {emp && Object.values(emp).map(value=>(
                    <td>{value}</td>
                ))}
            </tr>
        </table>
    </>
  )
}

export default EmployeeTable