import React, { useState } from 'react'
import { ClocksIcon, ClipboardIcon, ReceiptIcon, PlusIcon } from '../../../assets/icons/index'
import { Button } from '@headlessui/react'
import AddTodoModal from './AddTodoModal'

interface Todo {
    id: number;
    title: string;
    icon: JSX.Element;
    date: string;
}

const ToDoList: React.FC = () => {
    const [toDoModal, setToDoModal] = useState<boolean>(false)
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 1,
            title: 'Run payroll',
            icon: <ReceiptIcon />,
            date: 'Mar 4 at 6:00 pm' 
        },
        {
            id: 2,
            title: 'Review time off request',
            icon: <ClocksIcon />,
            date: 'Mar 7 at 8:00 pm'
        },
        {
            id: 3,
            title: 'Sign board resoluation',
            icon: <ClipboardIcon />,
            date: 'Mar 12 at 8:30 pm'
        },
    ])

    const handleAddTodo = () => {
        setToDoModal(true)
    }
    
    const handleCloseModal = () => {
    setToDoModal(false);
    };

    const addTodo = (newTodo: Todo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
      };

    return (
        <div className='mt-4'>
            <h2 className='text-gray-900 text-2xl font-bold leading-10 mb-6'>Your to-Do list</h2>
            {todos.map((item)=> {
                return(
                    <div key={item.id} className='flex items-center mb-6'>
                        <div className="icon-box mr-4 bg-brand-50 rounded-2xl p-2">
                            {item.icon}
                        </div>
                        <div>
                            <span className='text-gray-900 font-bold leading-5 block mb-2'>{item.title}</span>
                            <span className='text-gray-400 leading-3 ext-xs'>{item.date}</span>
                        </div>
                    </div>
                )
            })}
            <Button className='flex items-center' onClick={handleAddTodo}>
                <div className="icon-box mr-4 bg-brand-200 rounded-2xl p-2">
                <PlusIcon />
                </div>
                <span>Add to Do</span>
            </Button>
            <AddTodoModal isOpen={toDoModal} onClose={handleCloseModal} addTodo={addTodo} />
        </div>
    )
}

export default ToDoList