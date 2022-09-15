import {useForm} from 'react-hook-form'
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

    const onSubmit = (data) =>{
        console.log(data)
    }
    console.log(errors)
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
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
export default LoginForm