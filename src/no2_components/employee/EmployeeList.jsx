import React from 'react'

const EmployeeList = ({state, setState}) => {
    const {empTable, selectedId} = state;

    const handleClick = (id) => {
        setState(prev => (
            {...prev, selectedId: id}
        ))
    }

    return (
        <div
            style={{
                display: 'flex',
                gap: '16px',
                marginTop: '25px',
                flexWrap: 'wrap'
            }}
        >
            {
                empTable.map(item => (
                    <button
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        style={{
                            padding: '14px 22px',
                            border:
                                selectedId === item.id
                                ? '2px solid #0f172a'
                                : '2px solid transparent',

                            borderRadius: '18px',
                            background:
                                selectedId === item.id
                                ? 'linear-gradient(135deg, #111827, #374151)'
                                : 'white',

                            color:
                                selectedId === item.id
                                ? 'white'
                                : '#111827',

                            fontWeight: '600',
                            fontSize: '15px',
                            cursor: 'pointer',

                            boxShadow:
                                selectedId === item.id
                                ? '0 10px 20px rgba(0,0,0,0.2)'
                                : '0 4px 10px rgba(0,0,0,0.08)',

                            transform:
                                selectedId === item.id
                                ? 'translateY(-3px)'
                                : 'translateY(0)',

                            transition: 'all 0.25s ease'
                        }}
                    >
                        👤 {item.name}
                    </button>
                ))
            }
        </div>
    )
}

export default EmployeeList