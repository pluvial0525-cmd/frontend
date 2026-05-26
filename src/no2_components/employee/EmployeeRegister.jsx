import React, { useContext, useState } from 'react'
import { Form } from 'react-router-dom'
import { EmployeeContext } from '../../no0_context/EmployeeContext'

const initialEmps = [
    {id: "1", name: "John", email: "john@example.com", job: "frontend", pay: 600},
    {id: "2", name: "Peter", email: "peter@example.com", job: "backend", pay: 600},
    {id: "3", name: "Susan", email: "susan@example.com", job: "db", pay: 600},
    {id: "4", name: "Sue", email: "sue@example.com", job: "ai", pay: 600},
]

const initialEmp = {
    id: '', name: '', email: '', job: '', pay: ''
}
const initialstate = {
    empTable: initialEmps,
    emp: initialEmp,
    mode: '',
    selectedID: ""
}



const EmployeeRegister = ({}) => {
  const {dispatch} = useContext(EmployeeContext)

  const [emp, setEmp] = useState(initialEmp);
    
  const handleChange = (event)=>{
    const {name, value} = event.target;
      setEmp(prev => (
            {...prev, [name]: value}
        ))
    }
  const handleSubmit = (event)=>{
    event.preventDefault();
      const newId = Date.now().toString();

        dispatch({type: "register", payload: {newId, emp}})

        setEmp(initialEmp)
    }
  return (
  <>
    <form 
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '18px'
      }}
    >

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <label
          style={{
            fontWeight: 'bold',
            color: '#333'
          }}
        >
          이름
        </label>

        <input
          type="text"
          name="name"
          value={emp.name}
          onChange={handleChange}
          placeholder='이름'
          style={{
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            outline: 'none',
            fontSize: '15px'
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <label
          style={{
            fontWeight: 'bold',
            color: '#333'
          }}
        >
          이메일
        </label>

        <input
          type="email"
          name="email"
          value={emp.email}
          onChange={handleChange}
          placeholder='이메일'
          style={{
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            outline: 'none',
            fontSize: '15px'
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <label
          style={{
            fontWeight: 'bold',
            color: '#333'
          }}
        >
          직업
        </label>

        <input
          type="text"
          name="job"
          value={emp.job}
          onChange={handleChange}
          placeholder='직업'
          style={{
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            outline: 'none',
            fontSize: '15px'
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <label
          style={{
            fontWeight: 'bold',
            color: '#333'
          }}
        >
          급여
        </label>

        <input
          type="number"
          name="pay"
          value={emp.pay}
          onChange={handleChange}
          placeholder='급여'
          style={{
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            outline: 'none',
            fontSize: '15px'
          }}
        />
      </div>

      <button
        style={{
          padding: '14px',
          border: 'none',
          borderRadius: '10px',
          backgroundColor: '#4f46e5',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        등록
      </button>

    </form>
  </>
)
}

export default EmployeeRegister
