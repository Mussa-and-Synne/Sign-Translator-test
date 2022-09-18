import { useState } from "react-hook-form"
import TranslationInput from "../components/Translation/TranslationInput"
import TranslationOutput from "../components/Translation/TranslationOutput"
import withAuth from "../hoc/WithAuth"


const Translation = () =>{
    var imagetranslate = []
    //const [inputText, setInputText] = useState()
    const handleTranslate = (text) =>{
        //Sjekk tekst lengde
        //Sett text i state?
        //bruk API handler lagd (translate.js)
        //save i locale storage
        //Oppdater context state (useUser)
        //Split text
        //Finn path
        //Print bilder i return i views, ikke output

        /*
        console.log(text)*/
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