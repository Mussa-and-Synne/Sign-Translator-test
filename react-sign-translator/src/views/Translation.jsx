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
    const handleTranslate = (text) =>{
        setInputText(inputText);
        const [updatedUser] = createTranslation(user, text);

		console.log("Result ", updatedUser);
		storageSave(STORAGE_KEY_USER, updatedUser);
		setUser(updatedUser);


        imagetranslate = []
        for (const c of text) {imagetranslate.push(c)}
        
    }

    return(
        <>
            <section id="letter-options">
                <TranslationInput onTranslation={handleTranslate}/>
            </section>
            <h3 className="translation_txt">Text to Sign Language:</h3>
			{/* printe bilder her */}
            {imagetranslate.map(c => (<TranslationOutput data={c} />))}
            <TranslationOutput data={"a"} />

        </>
    )
}
export default withAuth(Translation)