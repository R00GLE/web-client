import React, {useState} from 'react'
import useSetTitle from '../../hooks/useSetTitle';
import Loading from '../ui/Loading';
import useDelete from '../../hooks/useDelete';
import useFetch from '../../hooks/useFetch';
import Breadcrumb from '../ui/Breadcrumb';
import Title from '../ui/Title';
import TasksTable from './TasksTable';
import {IconClipboardList} from '../ui/Icons';

const TasksList = ({history}) => {
    useSetTitle('Tasks');
    const [tasks, updateTasks] = useFetch('/tasks')
    const [projects] = useFetch('/projects')
    const [filter, setFilter] = useState({project: '', user: '', status: ''})

    const handleSetProject = (e) => {
        setFilter({...filter, project: e.target.value})
    }
    const handleSetStatus = (e) => {
        setFilter({...filter, status: e.target.value})
    }

    const destroy = useDelete('/tasks/', updateTasks);

    return <>

        <div className='heading'>
            <Breadcrumb history={history}/>
            <div>
                <label>Project</label>
                <select onChange={handleSetProject}>
                    <option value=''>Any</option>
                    {projects && projects.map(project => <option value={project.id}
                                                                 key={project.id}>{project.name}</option>)}
                </select>
            </div>
            <div>
                <label>Status</label>
                <select onChange={handleSetStatus}>
                    <option value=''>Any</option>
                    <option value='0'>Open</option>
                    <option value='1'>Closed</option>
                </select>
            </div>
        </div>
        <Title title='Tasks' icon={<IconClipboardList/>}/>

        {!tasks ?
            <Loading/> :
            <TasksTable tasks={tasks} filter={filter} destroy={destroy}/>
        }
    </>
}

export default TasksList
