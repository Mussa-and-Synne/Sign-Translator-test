import withAuth from "../hoc/WithAuth"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileLogout from "../components/Profile/ProfileLogout"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { UseUser } from "../context/UserContext"
const Profile = () =>{

    const {user} = UseUser()

    return(
        <>
            <h1>Profile</h1>
            <ProfileHeader username = {user.username}/>
            <ProfileTranslationHistory translations = {user.translations }/>
            <ProfileLogout />
        </>
    )
}
export default withAuth(Profile)