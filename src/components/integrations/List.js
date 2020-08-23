import React from 'react'
import { useHistory } from 'react-router-dom';
import useSetTitle from '../../hooks/useSetTitle';
import useFetch from '../../hooks/useFetch';
import useDelete from '../../hooks/useDelete';
import Loading from '../ui/Loading';
import NoResults from '../ui/NoResults';
import CreateButton from '../ui/buttons/Create';

const IntegrationsList = () => {
    useSetTitle('Integrations');
    const history = useHistory()
    const [integrations, updateIntegrations, error] = useFetch('/integrations')
    const destroy = useDelete('/integrations/', updateIntegrations);
    const handleCreate = () => { history.push("/integration/create"); }
    return (
        <>
            <div className='heading'>
                <h1>Integrations</h1>
                <CreateButton onClick={handleCreate}>Create integration</CreateButton>
            </div>
            { !integrations ? <Loading /> : integrations.length === 0 ? <NoResults /> :
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {integrations.map(integration =>
                    <article key={integration.app} className='base '>
                        <h2 className='mb-2'>
                            {integration.app}
                            <i data-feather={integration.icon} className={` text-red-600  float-right text-4xl`} />
                        </h2>
                            <p className='mb-2'>{integration.desc}</p>
                            <button className='mt-2'> Enable</button>
                    </article>
                )}
            </section>}

        </>
    )
}

export default IntegrationsList