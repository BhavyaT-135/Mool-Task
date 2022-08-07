import React from "react";
import 'antd/dist/antd.min.css';
import { Button, Card } from 'antd';
import { useParams } from "react-router-dom";

const Task = () => {
    
    const tasks = [{
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
    ];

    let { id } = useParams();

    return (
        <div className="site-card-border-less-wrapper" style={{ textAlign: "center", height: '100vh', padding: '30px', background: '#ececec' }}>
            <Card
                title={<h2>{tasks[id-1].title}</h2>}
                bordered={false}
                style={{
                    width: '70%',
                    margin: 'auto',
                }}
            >
                <p style={{fontSize: '1.2em', fontWeight: '600'}}>{tasks[id-1].description}</p>
                <Button className='task-button' type="primary" size="large" style={{ backgroundColor: '#405CD2', marginTop: '5%' }}>Task Completed</Button>
            </Card>
        </div>
    )
}

export default Task;