import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
const ProfileTranslationHistory = ({translations}) => {
    const translationList = translations?.map(translation => <ProfileTranslationHistoryItem key={translation} item={translation}/>)
    return (
        <section>
            <h4>Last 10 translations</h4>
            <ul>
                {translationList}
            </ul>
        </section>
    )
}
export default ProfileTranslationHistory