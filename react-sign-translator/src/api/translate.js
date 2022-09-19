import {createHeaders} from './index'
const apiUrl = process.env.REACT_APP_API_URL

export const createTranslation = async (user, translation) =>{
    try{
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH', // Create a resource
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]
            })
        })
        if(!response.ok){
            throw new Error('Could not update translations')
        }
        const data = await response.json()
        console.log("data: " + data)
        return [ null, data ]
    }
    catch(error){
        return [error.message, null ]
    }
}
