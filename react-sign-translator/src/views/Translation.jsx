import TranslationInput from "../components/Translation/TranslationInput"
import TranslationOutput from "../components/Translation/TranslationOutput"
import withAuth from "../hoc/WithAuth"
import { useState } from "react"
import { createTranslation } from "../api/translate"
import { UseUser } from "../context/UserContext"
import { storageSave } from "../utils/storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"

const Translation = () =>{

    const { user, setUser } = UseUser();
    var imagetranslate = []
    const [inputText, setInputText] = useState()

    const handleTranslate = async (text) =>{
        setInputText(text);
        const [error,updatedUser] = await createTranslation(user, text);
        console.log(error)
        console.log("updated user: " + updatedUser) //updated user er null whyyy
        console.log(user)
        
        //if(updatedUser !== null){}
            storageSave(STORAGE_KEY_USER, updatedUser);
		    setUser(updatedUser);
        
        



        
    }
    imagetranslate = []
    for (const c of inputText) {imagetranslate.push(c)}

    return(
        <>
            <section id="letter-options">
                <TranslationInput onTranslation={handleTranslate}/>
            </section>
            <h3 className="translation_txt">Text to Sign Language:</h3>
			{/* printe bilder her */}
            {imagetranslate.map(c => (<TranslationOutput data={c} />))}
            {}

        </>
    )
}
export default withAuth(Translation)