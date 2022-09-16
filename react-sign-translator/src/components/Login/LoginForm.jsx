import { useState, useEffect } from 'react'
import {useForm} from 'react-hook-form'
import{loginUser} from '../../api/user'
import { storageSave } from '../../utils/storage'
import {useHistory} from 'react-router-dom'

const usernameConfig = {
    required: true,
    minLength: 3
}
const LoginForm = () =>{
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    //Local State
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    //Side effects
    // useEffect(() => {
    //     if(user){
    //         //redirect to profile
    //     }
    // }, []) //Empty means only run 1 time

    //Event Handlers
    const onSubmit = async ({username}) =>{
        setLoading(true)
        const [error, user] = await loginUser(username)
        if(error !== null){
            setApiError(error)
        }
        if(user !== null){
            storageSave('translation-user', user)
        }
        setLoading(false)
    }

    //Render Functions
    const errorMessage = (() =>{
        if(!errors.username){
            return null
        }

        if(errors.username.type === 'required'){
            return <span>Username is required!</span>
        }

        if(errors.username.type === 'minLength'){
            return <span>Minimum length of 3 required!</span>
        }
    })()
    return(
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <input type="text" 
                    placeholder='Whats your name?'
                    {...register("username", usernameConfig)} />
                {errorMessage}
                </fieldset>
                <button type='submit' disabled={loading}>Log in</button>

                {loading && <p>Logging in...</p>}
                {apiError && <p>{ apiError }</p>}
            </form>
        </>
    )
}
export default LoginForm