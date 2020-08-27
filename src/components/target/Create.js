import React, { useState } from 'react'
import secureApiFetch from '../../services/api';
import Breadcrumb from '../ui/Breadcrumb';

export default function TargetCreateForm({ match, history }) {
    const projectId = match.params.id;
    const [newTarget, setNewTarget] = useState({ name: null, kind: 'host' })
    const [loading, setLoading] = useState(false)
    const handleCreate = async () => {
        setLoading(true)
        await secureApiFetch(`/projects/${projectId}/targets`, { method: 'POST', body: JSON.stringify(newTarget) })
        history.push(`/project/${match.params.id}`)
    }
    const handleFormChange = e => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setNewTarget({ ...newTarget, [name]: value });
    };
    const handleGoBack = () => { history.goBack() }
    const allFieldsFilled = newTarget.name

    return (
        <div>
            <Breadcrumb goBack={handleGoBack} path={history.location.pathname} />
            <h1>Create Target</h1>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor='name'>Name</label>
                <input autoFocus type="text" name="name" onChange={handleFormChange} />
                <label htmlFor='kind'>Kind</label>
                <select name="kind" onChange={handleFormChange}>
                    <option value='host'>Host</option>
                    <option value='webapp'>Webapp</option>
                    <option value='binary'>Binary</option>
                </select>

                <button onClick={handleCreate} disabled={loading || !allFieldsFilled}>{loading ? 'Wait please' : 'Create'}</button>
                <button onClick={handleGoBack} disabled={loading} type='cancel'>Cancel</button>
            </form>
        </div>
    )
}