import React, { useState, useContext } from 'react'
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline
} from "react-icons/md"
import styled from 'styled-components'
import { TodoContext } from '../../no0_context/TodoContext';


const TodoListChild = ({item}) => {
    const { dispatch } = useContext(TodoContext);
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState('')
    
    const handleToggle = () => {
        dispatch({ type: 'TOGGLE', payload: item.id });
    }

    const handleUpdate = ()=> {
        if (!value.trim()) {
            setEditing(false);
            return;
        }
        dispatch({ type: 'UPDATE',
            payload: {
                id: item.id,
                subject: value.trim()
            } 
        });
        setEditing(false)
    }
    const handleDelete = () => {
        dispatch({ type: 'DELETE', payload: item.id });
    }

    return (
    <div>
      <div onClick={handleToggle} style={{ display: 'inline-block', cursor: 'pointer' }}>
        {
            item.checked ?
            <MdCheckBox/> : <MdCheckBoxOutlineBlank/>    
        }
      </div>
      <div>
        {
        editing ?
        <input
            type="text"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            onBlur = {handleUpdate}
            onKeyDown={(e)=>{
                if(e.key==="Enter") handleUpdate();
            }}
            autoFocus
        />
            :
            <Checked
                $checked = {item.checked}
                onDoubleClick={()=>{
                    setValue(item.subject);
                    setEditing(true);
                }}
            >
                {item.subject}
            </Checked>
       
        }
      </div>
      <div
        onClick={handleDelete}
        style={{ cursor: 'pointer' }}
      >
        <MdRemoveCircleOutline/>
      </div>
    </div>
  )
}

export default TodoListChild

const ItemBox = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;

  background: #f9fafb;

  padding: 14px;

  border-radius: 12px;

  transition: 0.2s;

  &:hover {
    background: #eef2ff;
  }
`

const CheckBox = styled.div`
  font-size: 24px;

  color: #4f46e5;

  cursor: pointer;

  display: flex;
  align-items: center;
`

const ContentBox = styled.div`
  flex: 1;
`

const Checked = styled.div`
    font-size: 16px;

    color: ${({$checked}) =>(
        $checked ? "#999" : "#222"
    )};

    text-decoration: ${({$checked}) =>(
        $checked ? "line-through" : "none"
    )};
`

const DeleteButton = styled.div`
  font-size: 24px;

  color: #ef4444;

  cursor: pointer;

  display: flex;
  align-items: center;

  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

const EditInput = styled.input`
  width: 100%;

  padding: 8px;

  border: 1px solid #bbb;
  border-radius: 8px;

  outline: none;

  font-size: 15px;
`