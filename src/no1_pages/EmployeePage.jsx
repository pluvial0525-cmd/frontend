import React, { useEffect, useState } from 'react'
import EmployeeList from '../no2_components/employee/EmployeeList'
import EmployeeTable from '../no2_components/employee/EmployeeTable'
import EmployeeRegister from '../no2_components/employee/EmployeeRegister'
import EmployeeUpdate from '../no2_components/employee/EmployeeUpdate'

const initialEmps = [
    {id: "1", name: "John", email: "john@example.com", job: "frontend", pay: 600},
    {id: "2", name: "Peter", email: "peter@example.com", job: "backend", pay: 600},
    {id: "3", name: "Susan", email: "susan@example.com", job: "db", pay: 600},
    {id: "4", name: "Sue", email: "sue@example.com", job: "ai", pay: 600},
]

const initialEmp = {
  id: '', name: '', email: '', job: '', pay:''
}

const initalState = {
  empTable: initialEmps,
  emp: initialEmp,
  mode: '',
  selectedId: ""
}

const EmployeePage = () => {
  const [state, setState] = useState(initalState);
  const {empTable, emp, selectedId, mode} = state;

  useEffect(()=>{
    selectedId &&
    setState(prev => (
      {
        ...prev, 
        emp:empTable.find(item => item.id === selectedId)
      }
    ))
  }, [selectedId, empTable])

  const handleDelete =()=>{

    if(!selectedId) {
      alert("삭제할 데이터를 선택하세요");
      return;
    }
    setState(prev => (
      {
        ...prev,
        empTable: prev.empTable.filter(item => item.id !== selectedId),
        emp: initialEmp,
        selectedId: ""
      }
    ))
  }
  return (
  
  <div
    style={{
      width: '90%',
      maxWidth: '1100px',
      margin: '40px auto',
      padding: '30px',
      borderRadius: '20px',
      backgroundColor: '#f8f9fc',
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
    }}
  >
    {console.log(state.empTable)}

    <h1
      style={{
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '25px',
        color: '#222'
      }}
    >
      Employee Management
    </h1>

    <EmployeeList state={state} setState={setState}/>

    <div
      style={{
        marginTop: '25px',
        overflowX: 'auto'
      }}
    >
      <EmployeeTable state={state}/>
    </div>

    <div
      style={{
        display: 'flex',
        gap: '12px',
        marginTop: '20px'
      }}
    >
      <button
        onClick={()=>setState(prev=>({...prev, mode:"register"}))}
        style={{
          padding: '10px 18px',
          border: 'none',
          borderRadius: '10px',
          backgroundColor: '#4f46e5',
          color: 'white',
          cursor: 'pointer',
          fontSize: '15px'
        }}
      >
        등록
      </button>

      <button
        onClick={()=>setState(prev=>({...prev, mode:"update"}))}
        style={{
          padding: '10px 18px',
          border: 'none',
          borderRadius: '10px',
          backgroundColor: '#2563eb',
          color: 'white',
          cursor: 'pointer',
          fontSize: '15px'
        }}
      >
        수정
      </button>

      <button
        onClick={()=>setState(prev=>({...prev, mode:"delete"}))}
        style={{
          padding: '10px 18px',
          border: 'none',
          borderRadius: '10px',
          backgroundColor: '#dc2626',
          color: 'white',
          cursor: 'pointer',
          fontSize: '15px'
        }}
      >
        삭제
      </button>
    </div>

    <div
      style={{
        marginTop: '25px',
        padding: '20px',
        borderRadius: '15px',
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}
    >
      {
        mode === "register" ? 
        <EmployeeRegister setState={setState}/>

        : mode === "update" ? 

        <EmployeeUpdate emp={emp} setState={setState}/>

        : mode === "delete" ? 

        <button
          onClick={handleDelete}
          style={{
            width: '100%',
            padding: '12px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: '#dc2626',
            color: 'white',
            cursor: 'pointer',
            fontSize: '15px'
          }}
        >
          위 데이터를 삭제하시겠습니까?
        </button>

        : null
      }
    </div>
  </div>
)
}

export default EmployeePage