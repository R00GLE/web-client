import React from 'react'
import useSetTitle from '../../hooks/useSetTitle';
import NoResults from '../ui/NoResults';
import Loading from '../ui/Loading';
import useDelete from '../../hooks/useDelete';
import useFetch from '../../hooks/useFetch';
import CreateButton from './../ui/buttons/Create'
import Breadcrumb from '../ui/Breadcrumb';
import DeleteButton from '../ui/buttons/Delete';
import ProjectBadge from '../badges/ProjectBadge';

const ProjectsList = ({ history }) => {
    useSetTitle('Projects');
    const [projects, updateProjects] = useFetch('/projects')
    const destroy = useDelete('/projects/', updateProjects);
    const handleCreateProject = () => {
        history.push('/projects/create')
    }
    return <div>
        <div className='heading'>
            <Breadcrumb path={history.location.pathname} />
            <CreateButton onClick={handleCreateProject}>Create Project</CreateButton>
        </div>
        <h1>Projects</h1>
        {!projects ? <Loading /> : projects.length === 0 ? <NoResults /> :
            <table className='w-full'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Creation date/time</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) =>
                        <tr key={project.id}>
                            <td><ProjectBadge project={project} /></td>
                            <td><small>{project.description}</small></td>
                            <td>{project.insert_ts}</td>
                            <td className='text-right'><DeleteButton onClick={() => destroy(project.id)} /></td>
                        </tr>
                    )}
                </tbody>
            </table>}
    </div>
}


export default ProjectsList
