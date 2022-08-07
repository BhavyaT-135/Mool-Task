import React, {useEffect} from "react";
import 'antd/dist/antd.min.css';
import { Button, Card } from 'antd';
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';

const Task = () => {
    
    const [cookies, setCookie] = useCookies(['var1','var2','var3','var4','var5','var6','var7']);  

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

    let navigate = useNavigate();

    let { id } = useParams();

    const taskComplete = (id) => {
        if (id == 1) {
            setCookie('var1', 'var1', { path: '/' });
        } else if (id == 2) {
            setCookie('var2', 'var2', { path: '/' });
        } else if (id == 3) {   
            setCookie('var3', 'var3', { path: '/' });
        } else if (id == 4) {
            setCookie('var4', 'var4', { path: '/' });
        } else if (id == 5) {
            setCookie('var5', 'var5', { path: '/' });
        } else if (id == 6) {
            setCookie('var6', 'var6', { path: '/' });
        } else if (id == 7) {
            setCookie('var7', 'var7', { path: '/' });
        }
        navigate('/');
    }

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
                <Button className='task-button' type="primary" size="large" style={{ backgroundColor: '#405CD2', marginTop: '5%' }} onClick={()=>taskComplete(id)}>Task Completed</Button>
            </Card>
        </div>
    )
}

export default Task;