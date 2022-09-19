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
    var imageTranslate = []
    const [inputText, setInputText] = useState()

    const handleTranslate = async (text) =>{
        if(text.length > 40){
            alert("Translation is too long!")
            return;
        }
        setInputText(text);
        const [error,updatedUser] = await createTranslation(user, text);
        if(error !== null){
            console.log(error)
        }

        if(updatedUser !== null){
            storageSave(STORAGE_KEY_USER, updatedUser);
		    setUser(updatedUser);
        }
            
    }

    imageTranslate = []
        for (const c in inputText) {
            console.log(c)
            let value = inputText[c]
            console.log("replace: " + value.replace(/[^a-zA-Z]/g,""))
            let x = value.replace(/[^a-zA-Z]/g,"")
            imageTranslate.push(x)     
        }
        console.log(imageTranslate)


    return(
        <>
            <section id="letter-options">
                <TranslationInput onTranslation={handleTranslate}/>
            </section>
            <h3 className="translation_txt">Text to Sign Language:</h3>
            {imageTranslate.map((c, index) => (<TranslationOutput key={index} data={c} />))}
            {}

        </>
    )
}
export default withAuth(Translation)