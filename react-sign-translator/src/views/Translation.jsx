import TranslationInput from "../components/Translation/TranslationInput"
import withAuth from "../hoc/WithAuth"


const Translation = () =>{

    const handleTranslate = (text) =>{
        //Sjekk tekst lengde
        //Sett text i state?
        //bruk API handler lagd (translate.js)
        //save i locale storage
        //Oppdater context state (useUser)
        //Split text
        //Finn path
        //Print bilder i return i views, ikke output
    }

    return(
        <>
            <section id="letter-options">
                <TranslationInput onTranslation={handleTranslate}/>
            </section>
            <h3 className="translation_txt">Text to Sign Language:</h3>
			{/* printe bilder her */}
        </>
    )
}
export default withAuth(Translation)