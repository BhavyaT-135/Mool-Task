import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';

export default function Tasks() {

    const navigate = useNavigate();

    const [tasks, setTasks] = useState([{
        id: 1,
        title: 'Add a profile picture',
        description: 'Distinguish yourself by having an identity',
        visited: false,
        },
        {
        id: 2,
        title: 'Setup department',
        description: 'Add in departments that are there in your company',
        visited: false,
        },
        {
        id: 3,
        title: 'Add designations',
        description: 'Add in designations that are there in your company',
        visited: false,
        },
        {
        id: 4,
        title: 'Create allowance group',
        description: 'Add in allowance groups that are there in your company',
        visited: false,
        },
        {
        id: 5,
        title: 'Create status types',
        description: 'Add in status types that are there in your company',
        visited: false,
        },
        {
        id: 6,
        title: 'Create an employee',
        description: 'Add in employees that are there in your company',
        visited: false,
        },
        {
        id: 7,
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        visited: false,
        },
    ]);

    const taskComplete = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.visited = true;
            }
            return task;
        }));
        navigate('/tasks/' + id);
    }
    
    return (
        tasks.map((task) => {
            return (
            <div className='tasks-flexbox' key={task.id}>
                <div className='tasks-id'>{task.id}</div>
                <div className='tasks-content-flexbox'>
                    <div className='tasks-title'>{task.title}</div>
                    <div className='tasks-description'>{task.description}</div>
                </div>
                <div className='task-arrow'>
                    <RightOutlined style={{ fontSize: '20px', color: 'black' }} onClick={()=>taskComplete(task.id)} />
                </div>
            </div>    
            );
        })
  )
}
