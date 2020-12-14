import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";

import {AuthConsumer} from "../../contexts/AuthContext";
import Wrap from "../layout/Wrap";
import PrimaryButton from "../ui/buttons/Primary";

const Login = (props) => {

    const [loading, setLoading] = useState(false);
    const [credentials, setCredentials] = useState({username: null, password: null})
    const [error, setError] = useState(null)

    useEffect(() => {
        // each time an error occurs
        error && setTimeout(() => {
            setError(null)
        }, 4000)
    }, [error])

    const handleUsername = ev => {
        setCredentials({...credentials, username: ev.target.value})
    }
    const handlePassword = ev => {
        setCredentials({...credentials, password: ev.target.value})
    }

    const onOk = () => {
        setLoading(false);
    }
    const onKo = (err) => {
        setLoading(false);
        setError(err)
    }

    const handleSubmit = (ev, login) => {
        setLoading(true);
        ev.preventDefault();
        login(credentials, onOk, onKo);
    }

    let redirectTo
    try {
        redirectTo = props.location.state.from.pathname
    } catch {
        redirectTo = "/"
    }
    return (
        <AuthConsumer>
            {
                ({isAuth, login}) => (
                    <Wrap>
                        {isAuth && <Redirect to={redirectTo}/>}
                        <div className='flex justify-between items-center  w-full flex-col md:flex-row'>

                            <section className="flex flex-col w-full sm:w-1/2 max-w-md gap-2 mx-auto text-center">
                                <form onSubmit={e => handleSubmit(e, login)}>
                                    <fieldset>
                                        <legend className="text-5xl font-bold mb-10">Login</legend>
                                        <label htmlFor="inputUsername" className="sr-only">Username</label>
                                        <input type="text" id="inputUsername" onChange={handleUsername}
                                               placeholder="Username"
                                               required autoFocus/>
                                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                                        <input type="password" id="inputPassword" onChange={handlePassword}
                                               placeholder="Password" required/>
                                        <PrimaryButton
                                            type="submit">{!loading ? "Sign in" : "Processing..."}</PrimaryButton>
                                    </fieldset>
                                    {error &&
                                    <p className='flex items-center justify-between border border-red-600 p-3 rounded  text-red-600 text-center'>
                                        <span className='mx-auto'>{error}</span>
                                    </p>}
                                </form>
                            </section>
                            <i data-feather={'lock'}
                               className='  order-1 md:order-3 p-5 hidden md:inline'/>
                        </div>

                    </Wrap>
                )
            }
        </AuthConsumer>

    );
};

export default Login;
