import {createHeaders} from './index'
const apiUrl = process.env.REACT_APP_API_URL

export const createTranslation = (user, translation) =>{
    try{
        const response = fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH', // Create a resource
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]
            })
        })
        if(!response.ok){
            throw new Error('Could not update translations')
        }
        const data = response.json()
        return [ null, data ]
    }
    catch(error){
        return [error.message, null ]
    }
}
