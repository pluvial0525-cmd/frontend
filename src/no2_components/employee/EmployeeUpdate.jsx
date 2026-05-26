import React, { useContext, useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import { EmployeeContext } from '../../no0_context/EmployeeContext'

const initialEmp = {
    id: '', name: '', email: '', job: '', pay: ''
}

const EmployeeUpdate = () => {
  const {state, dispatch} = useContext(EmployeeContext)
  const {emp} = state;
  const [newEmp, setNewEmp] = useState(emp);

  useEffect(()=> {
    emp &&
    setNewEmp(emp)
  }, [emp])

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setNewEmp(prev => (
            {...prev, [name]: value}
        ))
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        
        dispatch({type: "update", payload: newEmp})
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
          value={newEmp.name}
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
          value={newEmp.email}
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
          value={newEmp.job}
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
          value={newEmp.pay}
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
          backgroundColor: '#2563eb',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        수정
      </button>

    </form>
  </>
)
}

export default EmployeeUpdate
