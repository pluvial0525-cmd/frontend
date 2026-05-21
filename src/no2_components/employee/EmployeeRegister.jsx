import React, { useState } from 'react'
import { Form } from 'react-router-dom'

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
    emp: initialEmp
}

const reducer = (state, action)=> {
    switch(action.type){
        case "change":
            const {name, value} = event.target;
            return
                {
                    ...state,
                    emp: {...state.emp, [name]: value}
                }
    }
} 

const EmployeeRegister = ({setState}) => {
    const [emp, setEmp] = useState(initialEmp);
    
    const handleChange = (event)=>{
        const {name, value} = event.target;
        setEmp(prev => (
            {...prev, [name]: value}
        ))
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        emp &&
        setState(prev => (
            {
                ...prev,
                empTable: [
                    ...prev.empTable,
                    {...emp, id: Date.now()}
                ]
            }
        ))
        setState(prev=>({
            ...prev,
            selectedID: prev.empTable[prev.empTable.length-1].id
        }))
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
