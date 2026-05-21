import React, { useState } from 'react'


const initalState = {
   id: '', name:'', email: '', job:'', pay: null
}

const Register = ({setInfos}) => {
    const [info,  setInfo] = useState(initalState);
    const handlechange =(event)=> {
        const {name, value} = event.target;
        setInfo(prev => (
            {...prev, [name]: value }

        ))

    }
    const handleSumit= (event) => {
        event.preventDefault();
        setInfos(prev => (
            [...prev, info]
        ))

    }
  return (
    <form onSubmit={handleSumit}>
        <div>
            <label>이름</label>
            <input 
            type = "text"
            name = "name"
            value ={info.name}
            onChange={handlechange}
            />
        </div>
            
        <div>
            <label>이메일</label>
            <input 
            type = "email"
            name = "email"
            value ={info.email}
            onChange={handlechange}
            />
        </div>

        <div>
            <label>직업</label>
            <input 
            type = "text"
            name = "job"
            value ={info.job}
            onChange={handlechange}
            />
        </div>

        <div>
            <label>급여</label>
            <input 
            type = "number"
            name = "pay"
            value ={info.pay}
            onChange={handlechange}
            />
        <button>생성</button>
        </div>
      
    </form>
    )
}

export default Register
