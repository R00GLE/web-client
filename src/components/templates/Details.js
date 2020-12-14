import {Link} from 'react-router-dom';
import secureApiFetch from '../../services/api';
import Breadcrumb from '../ui/Breadcrumb';
import Loading from '../ui/Loading';
import useFetch from '../../hooks/useFetch';
import useSetTitle from '../../hooks/useSetTitle';
import useDelete from '../../hooks/useDelete';
import PrimaryButton from '../ui/buttons/Primary';
import {IconPlusCircle} from '../ui/Icons';
import Title from '../ui/Title';
import DeleteButton from "../ui/buttons/Delete";
import ButtonGroup from "../ui/buttons/ButtonGroup";
import Timestamps from "../ui/Timestamps";

const TemplateDetails = ({history, match}) => {
    useSetTitle('Projects templates');
    const [template, updateTemplate] = useFetch(`/projects/${match.params.id}`)
    const [tasks] = useFetch(`/projects/${match.params.id}/tasks`)

    const cloneProject = async (templateId) => {
        await secureApiFetch(`/projects/${templateId}/clone`, {method: 'POST'})
        history.push('/projects')
    }

    const destroy = useDelete('/tasks/', updateTemplate);

    return (
        <>
            <div className='heading'>
                <Breadcrumb>
                    <Link to="/templates">Templates</Link>
                </Breadcrumb>
                {template &&
                <ButtonGroup>
                    <PrimaryButton onClick={() => cloneProject(template.id)}><IconPlusCircle
                    /> Create
                        project from template</PrimaryButton>
                    <DeleteButton onClick={() => destroy(template.id)}/>
                </ButtonGroup>
                }
            </div>
            {(!template) ?
                <Loading/> :
                <article>
                    <Title title={template.name} type='Project template'/>
                    <Timestamps insertTs={template.insert_ts} updateTs={template.update_ts}/>
                    <section className='grid lg:grid-cols-3 gap-4 my-4'>
                        <div className='card'>
                            <h2>Description</h2>
                            <p>{template.description}</p>
                        </div>
                    </section>
                    <section className='grid lg:grid-cols-3 gap-4 my-4'>
                        <div className='card'>
                            <h2>Tasks</h2>
                            <div className='flex flex-col gap-2 mb-2'>
                                <ol>
                                    {tasks && tasks.map((task, index) =>
                                        <li key={index}>
                                            <Link to={"/tasks/" + task.id}>{task.name}</Link>
                                        </li>
                                    )}
                                </ol>
                            </div>
                        </div>
                    </section>
                </article>}
        </>
    )
}

export default TemplateDetails
